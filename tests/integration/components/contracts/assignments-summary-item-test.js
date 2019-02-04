import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import moment from 'moment';
import { stubTinyData } from '../../../helpers/stub-tiny-data';
import contractDetailFixture from '../../../fixtures/contract-detail';

let tinyData;
let assignment;

module('Integration | Component | contracts/assignments-summary-item', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    tinyData = stubTinyData();
    tinyData.addResult(contractDetailFixture);

    const assignments = tinyData.get('assignment');

    [assignment] = assignments;

    this.setProperties({
      assignment,
    });
  });

  test('it renders', async function (assert) {
    await render(hbs`
      <ul>
        {{contracts/assignments-summary-item assignment=assignment}}
      </ul>
    `);

    const renderedLi = this.element.querySelector('li');
    assert.ok(renderedLi, 'The LI was rendered');

    const title = renderedLi.querySelector('span.summary-title');
    assert.ok(title, 'title block was rendered');
    assert.equal(title.textContent.trim(), assignment.attributes.name, 'name matches');

    const dueDate = renderedLi.querySelector('span.summary-date');
    assert.ok(dueDate, 'due date block was rendered');
    assert.matches(dueDate.textContent.trim(), moment(assignment.attributes.dueDate).format('L'), 'due date matches');
  });
});
