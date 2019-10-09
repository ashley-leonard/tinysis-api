import Component from '@ember/component';
import clone from '../utils/clone';

export default Component.extend({
  showErrors: false,
  classNames: ['t-form'],
  tagName: 'form',

  didReceiveAttrs() {
    if (this.lastModel === this.model) {
      return;
    }

    const pojo = this.normalizeModel(this.model);

    this.lastModel = this.model;

    this.set('pojo', pojo);

    this.validate();
  },

  didInsertElement() {
    const autofocus = this.element.querySelector('[autofocus]');

    if (autofocus) {
      autofocus.focus();
      autofocus.select();
    }
  },

  actions: {
    toggleValue(name, event) {
      event.stopPropagation();
      this.handleAttributeChange(name, !this.pojo[name]);
    },

    /* An action handler for change events, that works both with various
       controls that send along the value, name signature, along with
       generic DOM inputs that send an event
     */
    onChange(_value, _name) {
      let value;
      let name;

      if (_value instanceof Event) {
        ({ value, name } = _value.target);
      } else {
        value = _value;
        name = _name;
      }
      this.handleAttributeChange(name, value);
    },
  },

  normalizeModel(model) {
    return clone(model.attributes);
  },

  serializeModel(pojo, model) {
    return {
      ...model,
      attributes: {
        ...pojo,
      },
    };
  },

  updatePojo(updates) {
    const { pojo } = this;

    const newPojo = {
      ...pojo,
      ...updates,
    };

    this.setProperties({
      pojo: newPojo,
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
    if (!this.validator) return;

    const validationResult = this.validator.validate(this.pojo);

    this.setProperties(validationResult);
  },

  submit(event) {
    event.preventDefault();

    if (this.isInvalid) {
      this.set('showErrors', true);
      if (this.reportError) {
        this.reportError(this.errors);
      }
      return;
    }

    const { pojo, model } = this;

    this.set('disabled', true);
    const result = this.save(this.serializeModel(pojo, model));

    result.finally(() => {
      if (this.isDestroyed) return;

      this.set('disabled', false);
    });
  },
});
