import Component from '@ember/component';
import { computed } from '@ember/object';
import { schedule } from '@ember/runloop';

export default Component.extend({
  tagName: '',

  onChange() {},
  onSearch() {},

  hasResults: computed('results', function () {
    return this.results && this.results.length;
  }),

  didReceiveAttrs() {
    const {
      results,
      value,
    } = this;

    if (!(results && value)) return;

    const index = results.findIndex(r => r.value === value);
    if (index === -1) return;

    this.doChange(index, results[index]);
  },

  actions: {
    async doInput(event) {
      const searchValue = event.target.value.trim();
      this.set('searchValue', searchValue);
      let results;
      if (searchValue) {
        results = await this.onSearch(searchValue);
      } else {
        results = null;
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
      });

      schedule('afterRender', this, () => this.element.querySelector('input').focus());
    },

    doMouseOverSearchResult(index) {
      this.set('index', index);
    },
  },

  doChange(index, result) {
    this.setProperties({
      index,
      result,
      showResults: false,
    });

    this.onChange(result);
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
