import { get } from '@ember/object';
import { isPresent } from '@ember/utils';

export default class Validator {
  constructor(validations) {
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
        const fieldCollection = get(validations, key);
        const value = get(pojo, key);

        for (let len = fieldCollection.length, i = 0; i < len; i += 1) {
          const validation = fieldCollection[i];

          if (validation.if && !validation.if(key, value, pojo)) {
            break;
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
