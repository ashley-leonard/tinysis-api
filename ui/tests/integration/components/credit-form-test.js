import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { Interactor } from '@bigtest/interactor';
import { resolve } from 'rsvp';
import creditDetail from '../../fixtures/credit-detail';
import { clone } from '../../helpers/test-utils';

let requests;

module('Integration | Component | credit-form', (hooks) => {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    requests = [];
    this.setProperties({
      saveCredit(model) {
        requests.push(model);

        return resolve(model);
      },
      credit: clone(creditDetail.data),
    });
  });

  test('the credits form renders', async (assert) => {
    await render(hbs`
      {{credit-form
        model=credit
        save=saveCredit
      }}
    `);

    assert.ok(find('form'), 'credit form rendered');

    await click('button[type="submit"]');

    assert.equal(requests.length, 1, 'a request was sent');
    let [request] = requests;

    assert.deepEqual(request, creditDetail.data, 'existing model was sent with no changes');

    const select = new Interactor('select[name="courseType"]');

    await select.select('General');

    await click('button[type="submit"]');

    assert.equal(requests.length, 2, 'another request was sent');
    [, request] = requests;

    assert.equal(request.attributes.courseType, 'general', 'course type is now general');
  });
});
