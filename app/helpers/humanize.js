import { helper } from '@ember/component/helper';

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function humanizeHelper(_params/* , hash */) {
  const params = _params.concat([]);
  const first = params.shift() || '';

  return [capitalize(first), ...params].join(' ');
}

export default helper(humanizeHelper);
