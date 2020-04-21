import { helper } from '@ember/component/helper';
import { formatNumber } from 'accounting';

export function tNumber(params) {
  const [number] = params;
  return formatNumber(number);
}

export default helper(tNumber);
