import { isPresent } from '@ember/utils';

/*
 * A plugin validator with a DSL for defining validation rules,
 * and a data checker that validates and returns feedback
 * about errors.
 *
 * validation types:
 *
 * required: the value must be present
 * format: the string value must match a regex
 * valid: the value is passed to a helper function to validate and return an error
 *
 * options:
 *
 * if: fn(key, value, pojo, relationships) callback returns false to skip validation
 * message: optional text to display as message
 *
 * example:
 *    new Validator({
 *      name: { type: 'required' },
 *      age: { type: 'required', message: 'You\'re not old enough' },
 *      zip: { type: 'format', regex: /^\d{5}(-\d{4})?&/ },
 *    })
 */
export default class Validator {
  constructor(validations = {}) {
    this.validations = validations;
  }

  static addError(validationResult, key, message) {
    const errors = (validationResult && validationResult.errors) || {};
    return {
      errors: {
        ...errors,
        [key]: message,
      },
      isInvalid: true,
    };
  }

  static getRequiredError(validation, _k, value) {
    if (isPresent(value)) return null;

    return validation.message || 'An entry is required';
  }

  static getFormatError(validation, _k, value) {
    if (validation.regex.test(value)) return null;

    return validation.message || 'Please check the value';
  }

  static getValidityError(validation, key, value, _pojo) {
    if (validation.isValid(key, value, _pojo)) return null;

    return validation.message || 'Please check the value';
  }

  validate(pojo) {
    const { validations } = this;
    let validationResult = {
      isInvalid: false,
      errors: {},
    };

    Object.keys(validations)
      .forEach((key) => {
        let fieldCollection = validations[key];
        const value = pojo[key];

        if (!Array.isArray(fieldCollection)) {
          fieldCollection = [fieldCollection];
        }

        for (let len = fieldCollection.length, i = 0; i < len; i += 1) {
          const validation = fieldCollection[i];

          // skip this validation if falsey
          if (validation.if && !validation.if(key, value, pojo)) {
            continue;
          }

          let error;
          switch (validation.type) {
            case 'required':
              error = Validator.getRequiredError(validation, key, value, pojo);
              break;
            case 'format':
              error = Validator.getFormatError(validation, key, value, pojo);
              break;
            case 'valid':
              error = Validator.getValidityError(validation, key, value, pojo);
              break;
            default:
              throw new Error('unknown validation type');
          }

          // If an error is found, we stop validating the field. So only
          // one error at a time per field. Caller should put the validations
          // in a reasonable order if they want multiple ones per field.
          if (error) {
            validationResult = Validator.addError(validationResult, key, error);
            return;
          }
        }
      });

    return validationResult;
  }
}
