import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { resolve } from 'rsvp';
import fixture from '../../fixtures/admin-graduation-plan-requirements-list-all';
import { clone } from '../../helpers/test-utils';

let requests;
let requirement;

module('Integration | Component | settings-graduation-plan-requirement-form', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function (assert) {
    const requirements = clone(fixture);
    [requirement] = requirements.data;

    requests = [];

    this.setProperties({
      requirements: requirements.data,
      requirement,
      save(model) {
        assert.ok(model);
        requests.push({ type: 'save', model });
        return resolve(model);
      },
      reportError(error) {
        requests.push({ type: 'error', error });
      },
    });
  });

  test('it renders and submits round-trip', async (assert) => {
    await render(hbs`
      {{SettingsGraduationPlanRequirementForm
        model=requirement
        graduationPlanRequirements=requirements
        save=save
        reportError=reportError
      }}
    `);

    await click('.submit-row button');

    const [request] = requests;
    assert.ok(request, 'an outbound action occurred');

    assert.matches(request.model.attributes.name, requirement.attributes.name);
    assert.matches(request.model.attributes.requirementType, requirement.attributes.requirementType);
    assert.matches(request.model.attributes.notes, requirement.attributes.notes);
    assert.matches(request.model.attributes.position, requirement.attributes.position);
    assert.matches(request.model.attributes.status, requirement.attributes.status);
  });
});
