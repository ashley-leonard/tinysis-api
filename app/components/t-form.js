import Component from '@ember/component';
import { computed } from '@ember/object';
import Validator from '../utils/validator';
import clone from '../utils/clone';

export default Component.extend({
  showErrors: false,
  classNames: ['t-form'],

  validator: computed(() => new Validator({})),

  didReceiveAttrs() {
    if (this.lastModel === this.model) {
      return;
    }

    const pojo = this.normalizePojo(clone(this.model.attributes), this.model);

    this.lastModel = this.model;

    this.set('pojo', pojo);

    this.validate();
  },

  didInsertElement() {
    const autofocus = this.element.querySelector('input[autofocus]');

    if (autofocus) {
      autofocus.focus();
      autofocus.select();
    }
  },

  normalizePojo(pojo, /* model */) {
    return pojo;
  },

  serializePojo(outbound, /* pojo */) {
    return outbound;
  },

  updatePojo(updates) {
    const { pojo } = this;

    const newPojo = {
      ...pojo,
      ...updates,
    };

    this.setProperties({
      pojo: newPojo,
      showErrors: true,
    });

    this.validate();
  },

  handleAttributeChange(name, newValue) {
    const updates = {
      [name]: newValue,
    };

    this.updatePojo(updates);
  },

  validate() {
    const validationResult = this.validator.validate(this.pojo);

    this.setProperties(validationResult);
  },

  change(event) {
    const { name, value } = event.target;

    this.handleAttributeChange(name, value);
  },

  submit(event) {
    event.preventDefault();

    const { pojo } = this;

    const outbound = {
      ...this.model,
      attributes: {
        ...pojo,
      },
    };

    this.save(this.serializePojo(outbound, pojo));
  },
});
