import Component from '@ember/component';
import { computed } from '@ember/object';
import { schedule } from '@ember/runloop';
import { resolve } from 'rsvp';

function onSearch() {
  resolve([]);
}

export default Component.extend({
  tagName: 't-type-ahead',

  onSearch,
  onChange() {},

  hasResults: computed('results', function () {
    return this.results && this.results.length;
  }),

  didReceiveAttrs() {
    const {
      hasResults,
      results,
      value,
    } = this;

    if (!(hasResults && value)) return;

    const index = results.findIndex(r => r.value === value);
    if (index === -1) return;

    this.doChange(index, results[index], true);
  },

  actions: {
    async doInput(event) {
      const searchValue = event.target.value.trim();
      this.set('searchValue', searchValue);
      let results;

      if (searchValue) {
        results = await this.onSearch(searchValue);
      } else {
        results = [];
      }

      if (!Array.isArray(results)) throw new Error('Array result required for search');

      this.setResults(results);
    },

    doSelect(index, result) {
      this.doChange(index, result);
    },

    doKeyDown(event) {
      switch (event.key) {
        case 'ArrowDown':
          this.incrementSelection();
          event.preventDefault();
          break;
        case 'ArrowUp':
          this.decrementSelection();
          event.preventDefault();
          break;
        case 'Enter': {
          const result = this.results[this.index];
          this.doChange(this.index, result);
          break;
        }
        case 'Escape': {
          const { clearedResult } = this;
          if (clearedResult) {
            this.setProperties({
              result: clearedResult,
              clearedResult: null,
            });
          }
          this.set('showResults', false);
          break;
        }
        default:
          break;
      }
    },

    doClearResult() {
      const { result } = this;

      this.setProperties({
        clearedResult: result,
        result: null,
        value: null,
      });

      schedule('afterRender', this, () => this.element.querySelector('input').focus());

      this.onChange(null, this.name);
    },

    doMouseOverSearchResult(index) {
      this.set('index', index);
    },
  },

  doChange(index, result, initOnly = false) {
    this.setProperties({
      index,
      result,
      showResults: false,
    });

    if (!initOnly) {
      this.onChange(result.value, this.element.getAttribute('name'), result);
    }
  },

  incrementSelection() {
    const {
      results,
      index,
    } = this;
    if (index + 1 >= results.length) {
      this.set('index', results.length - 1);
    } else {
      this.set('index', index + 1);
    }
  },

  decrementSelection() {
    const {
      index,
    } = this;
    if (index - 1 < 0) {
      this.set('index', 0);
    } else {
      this.set('index', index - 1);
    }
  },

  setResults(results) {
    this.setProperties({
      showResults: true,
      results,
      index: -1,
    });
  },
});
