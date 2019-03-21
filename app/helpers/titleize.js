import { helper } from '@ember/component/helper';

export function titleize(params/* , hash */) {
  const [title] = params;

  if (!title) return title;

  return `${(title)[0].toUpperCase()}${title.substr(1)}`;
}

export default helper(titleize);
