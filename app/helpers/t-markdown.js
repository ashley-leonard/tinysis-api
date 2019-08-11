import { helper } from '@ember/component/helper';
import showdown from 'showdown';
import { htmlSafe } from '@ember/string';

export default helper((params) => {
  const [text] = params;
  const converter = new showdown.Converter();

  return htmlSafe(converter.makeHtml(text));
});
