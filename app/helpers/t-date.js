import { helper } from '@ember/component/helper';
import moment from 'moment';

export function tDate([date, _format]) {
  let format;

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
  return moment(date)
    .format(format);
}

export default helper(tDate);
