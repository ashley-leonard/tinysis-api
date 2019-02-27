/* eslint-disable */
export function initialize(/* application */) {
  if (!Array.prototype.flatten) {
    Object.defineProperty(Array.prototype, 'flatten', {
      value: function() {
        return this.reduce((memo, arr) => memo.concat(arr), []);
      }
    });
  }
}

export default {
  initialize,
};
