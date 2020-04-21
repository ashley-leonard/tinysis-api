import Component from '@ember/component';
import { inject as service } from '@ember/service';
import CreditAssignmentPropsMixin from '../../mixins/credit-assignment-props';

export default Component.extend(CreditAssignmentPropsMixin, {
  tinyData: service(),
  tagName: '',
});
