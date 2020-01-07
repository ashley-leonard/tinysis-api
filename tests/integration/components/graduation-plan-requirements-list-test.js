import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { stubTinyData } from '../../helpers/stub-tiny-data';
import activeRequirementsFixture from '../../fixtures/admin-graduation-plan-requirements-list-active';

let tinyDataServiceMock;
let requests;

module('Integration | Component | GraduationPlanRequirementsList', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    tinyDataServiceMock = stubTinyData();
    requests = [];

    tinyDataServiceMock.addResult(activeRequirementsFixture);

    this.setProperties({
      graduationPlanRequirements: tinyDataServiceMock.get('graduationPlanRequirement'),
      updateRequirement(requirement) {
        requests.push({ type: 'update', requirement });
      },
    });
  });

  test('it renders with credit requirements', async (assert) => {
    await render(hbs`
      <GraduationPlanRequirementsList
        @graduationPlanRequirements={{graduationPlanRequirements}}
        @updateRequirement={{updateRequirement}}
        @requirementType="credit"
      />
    `);

    const graduationPlanRequirements = tinyDataServiceMock.get('graduationPlanRequirement');
    const creditRequirements = graduationPlanRequirements.filter(req => req.attributes.requirementType === 'credit');
    const parentCreditRequirements = creditRequirements.filter(req => !req.relationships.parent.data);

    assert.ok(find('[data-graduation-plan-requirements-list]'), 'list was rendered');
    assert.equal(findAll('tbody').length, parentCreditRequirements.length, 'expected table bodies rendered');
  });
});
