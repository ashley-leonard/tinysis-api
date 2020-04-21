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
    const relationships = this.normalizeRelationships(this.model);

    this.lastModel = this.model;

    this.setProperties({
      pojo,
      relationships,
    });

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
      this.handleChange(name, !this.pojo[name], 'pojo');
    },

    /* An action handler for change events, that works both with various
       controls that send along the value, name signature, along with
       generic DOM inputs that send an event
     */
    onChange(value, name) {
      this.handleChange(name, value, 'pojo');
    },
  },

  normalizeModel(model) {
    return clone(model.attributes);
  },

  /* Helper function callable by forms to update a relationship
   */
  updateRelationship(key, id, dataObjectExtensions = {}) {
    if (typeof key !== 'string') throw new Error('Requires relationship key for first argument');

    if (id) {
      return this.handleChange(key, { id, ...dataObjectExtensions }, 'relationships');
    }

    return this.handleChange(key, null, 'relationships');
  },

  /*
   * Relationships are normalized into a more compact form,
   * with keys pointing directly to the resource linkage
   * (skipping the data attribute). E.g.
   *
   *   { relationships: { boo: { data: { id: 1, type: 'foo' }}}}
   *
   * is normalized as
   *
   *   { boo: { id: 1, type: 'foo' } }
   *
   * Allows for easier use in templates and easier validation
   */
  normalizeRelationships(model) {
    const modelRelationships = model.relationships;
    if (!modelRelationships) return null;

    const relationships = Object.keys(modelRelationships)
      .reduce((memo, key) => {
        const relation = modelRelationships[key];
        if (!relation) throw new Error(`Malformed relationship: "${key}"`);
        memo[key] = relation.data;
        return memo;
      }, {});

    return relationships;
  },

  serializeModel(pojo, model, relationships) {
    const serialized = {
      ...model,
      attributes: {
        ...pojo,
      },
    };

    // with relationships if present
    if (relationships) {
      return {
        ...serialized,
        relationships: this.serializeRelationships(relationships),
      };
    }

    return serialized;
  },

  serializeRelationships(relationships) {
    return Object.keys(relationships)
      .reduce((memo, key) => {
        memo[key] = {
          data: relationships[key],
        };
        return memo;
      }, {});
  },

  updatePojo(updates, updatePath = 'pojo') {
    const pojo = this[updatePath];

    const newPojo = {
      ...pojo,
      ...updates,
    };

    this.set(updatePath, newPojo);

    this.validate();
  },

  handleChange(_name, _value, updatePath) {
    let value;
    let name;

    if (_value instanceof Event) {
      ({ value, name } = _value.target);
    } else {
      value = _value;
      name = _name;
    }

    const updates = {
      [name]: value,
    };

    this.updatePojo(updates, updatePath);
  },

  validate() {
    if (!this.validator) return { isValid: true, errors: {} };

    const validationResult = this.validator.validate(this.pojo);

    this.setProperties(validationResult);

    return validationResult;
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

    const {
      pojo,
      model,
      relationships,
    } = this;

    this.set('disabled', true);
    const result = this.save(this.serializeModel(pojo, model, relationships));

    result.finally(() => {
      if (this.isDestroyed) return;

      this.set('disabled', false);
    });
  },
});
