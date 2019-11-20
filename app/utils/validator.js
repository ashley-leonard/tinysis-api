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
 *      name: [{ type: 'required' }, { type: 'format', regex: /joe/, message: 'I can only be friends with joe' }],
 *      age: { type: 'required', message: 'You\'re not old enough' },
 *      zip: { type: 'format', regex: /^\d{5}(-\d{4})?&/ },
 *    })
 */
export default class Validator {
  constructor(validations = {}) {
    this.validations = validations;
  }

  /* util function to add an error to a validation result
   *
   * @param validationResult an object or null
   * @param key to add
   * @param message for key
   * @returns a new error object
   */
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

  /* util function for checking presence on a value
   *
   * @param validation the validation object
   * @param _k unused key string
   * @param value to test for presence
   * @returns null if present, or the validation message
   */
  static getRequiredError(validation, _k, value) {
    if (isPresent(value)) return null;

    return validation.message || 'An entry is required';
  }

  /* util function for checking format on a value using a regex
   *
   * @param validation the validation object
   * @param _k unused key string
   * @param value to test for format using regex from validation object
   * @returns null if passes regex, or the validation message
   */
  static getFormatError(validation, _k, value) {
    if (validation.regex.test(value)) return null;

    return validation.message || 'Please check the value';
  }

  /* util function for checking validity using a function
   *
   * @param validation the validation object. an isValid method must be supplied
   * that takes three arguments: key, value, pojo
   * @param key key string
   * @param value to test for presence
   * @param pojo to check for validity
   * @returns null if provided isValid function returns true, or the validation message
   */
  static getValidityError(validation, key, value, _pojo) {
    if (validation.isValid(key, value, _pojo)) return null;

    return validation.message || 'Please check the value';
  }

  /* validates the object against the validations and returns an object with
   * an errors object and an isInvalid attribute
   *
   * @param pojo to validate
   * @returns an object with two attributes:
   * @attr isInvalid indicates whether the object is invalid
   * @attr errors a manifest of errors, in which each key points to an array of error strings
   */
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
