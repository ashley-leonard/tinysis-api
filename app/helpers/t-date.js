import { helper } from '@ember/component/helper';
import dayjs from 'dayjs';

export function tDate([date, _format], options) {
  let format;

  if (!date) {
    return options.substitute || '';
  }

  switch (_format) {
    case 'compactTermMonth':
      format = 'MMM';
      break;
    case 'termMonth':
      format = 'MMMM YYYY';
      break;
    default:
      format = _format || 'D MMMM, YYYY';
  }
  return dayjs(date)
    .format(format);
}

export default helper(tDate);
