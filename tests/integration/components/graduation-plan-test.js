import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

import { stubTinyData } from '../../helpers/stub-tiny-data';

import graduationPlanMappings from '../../fixtures/graduation-plan-mappings';
import graduationPlanRequirements from '../../fixtures/graduation-plan-requirements-list-all';
import creditAssignments from '../../fixtures/student-credit-assignments';

let tinyDataServiceMock;

module('Integration | Component | graduation-plan', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    tinyDataServiceMock = stubTinyData();

    tinyDataServiceMock.addResult(graduationPlanMappings);
    tinyDataServiceMock.addResult(graduationPlanRequirements);
    tinyDataServiceMock.addResult(creditAssignments);

    this.setProperties({
      mappings: tinyDataServiceMock.get('graduationPlanMapping'),
      requirements: tinyDataServiceMock.get('graduationPlanRequirement'),
      creditAssignments: tinyDataServiceMock.get('creditAssignment'),
      addMapping: () => {},
      removeMapping: () => {},
    });
  });

  test('it renders', async function (assert) {
    await render(hbs`
      {{graduation-plan
        mappings=mappings
        requirements=requirements
        creditAssignments=creditAssignments
        addMapping=addMapping
        removeMapping=removeMapping
      }}
    `);

    debugger;

    assert.equal(this.element.textContent.trim(), '');
  });
});
