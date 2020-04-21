import { computed } from '@ember/object';
import TForm from './t-form';
import Validator from '../utils/validator';

export default TForm.extend({
  classNames: ['w-full', 'lg:w-1/2', 'xl:w-1/3'],
  reportingOptions: computed(() => ([
    { name: 'Monthly', value: 'monthly' },
    { name: 'End of term', value: 'end-of-term' },
    { name: 'None', value: 'none' },
  ])),
  validator: computed(() => (
    new Validator({
      name: [{ type: 'required' }],
      sequence: [
        {
          type: 'required',
        },
        {
          type: 'format',
          regex: /\d+/,
        },
      ],
    })
  )),
});
