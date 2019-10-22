import Validator from 'tinysis-ui/utils/validator';
import { module, test } from 'qunit';

module('Unit | Utility | validator', (hooks) => {
  let validations;
  hooks.beforeEach(() => {
    validations = {
      name: [{
        type: 'required',
        message: 'Tell me your name!',
      }],
      date: [{
        type: 'required',
      }, {
        type: 'format',
        regex: /\d{4}-\d{1,2}-\d{1,2}/,
      }],
      verifyName: [{
        type: 'valid',
        isValid: (key, value, pojo) => value === pojo.name,
        message: 'must match the other',
      }],
    };
  });

  test('it can be instantiated', (assert) => {
    const validator = new Validator(validations);
    assert.ok(validator);
  });

  test('it can validate a valid object', (assert) => {
    const validator = new Validator(validations);
    const result = validator.validate({
      name: 'Joe',
      verifyName: 'Joe',
      date: '2001-11-12',
    });

    assert.ok(result, 'a result was returned');
    assert.equal(result.isInvalid, false, 'object validated as correct');
    assert.ok(result.errors, 'an errors object was yielded');
    assert.equal(Object.keys(result.errors).length, 0, 'error object is empty');
  });

  test('it can validate an invalid object', (assert) => {
    const validator = new Validator(validations);
    const result = validator.validate({
      name: '',
      verifyName: 'Joe',
      date: 'sally',
    });

    assert.ok(result, 'a result was returned');
    assert.equal(result.isInvalid, true, 'object validated as invalid');
    assert.ok(result.errors, 'an errors object was yielded');
    assert.matches(result.errors.name, /Tell me/, 'expected requirement message flagged');
    assert.matches(result.errors.verifyName, /must match the other/, 'expected validity flagged');
    assert.ok(result.errors.date, /check the value/, 'expected format flagged');
  });

  test('it can validate the simplified relationships used by t-form internally', (assert) => {
    const validator = new Validator({
      food: [{
        type: 'required',
      }],
      friends: [{
        type: 'required',
      }],
    });

    const relationships = {
      food: {
        id: 1,
        type: 'jam',
      },
      friends: [],
    };

    let result = validator.validate(relationships);

    assert.ok(result, 'a result was returned');
    assert.equal(result.isInvalid, true, 'object validated as invalid');
    assert.ok(result.errors.friends, 'error present for friends');
    assert.notOk(result.errors.food, 'no error present for food');

    relationships.friends = [{ id: 1, type: 'joe' }];

    result = validator.validate(relationships);

    assert.ok(result, 'a result was returned');
    assert.equal(result.isInvalid, false, 'object validated as valid');
    assert.notOk(result.errors.friends, 'no error present for friends');
  });
});
