import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import students from '../../fixtures/coor-students';

module('Integration | Component | count-paragraph', (hooks) => {
  setupRenderingTest(hooks);

  test('it renders singular and plural variants', async function (assert) {
    this.setProperties({
      students,
      name: 'coordinatee',
    });

    await render(hbs`{{count-paragraph result=students name=name pluralName=pluralName}}`);

    assert.ok(find(`p[data-test-count-paragraph="${students.meta.count}"]`), 'expected counter rendered');

    assert.dom(this.element).hasText(`Found ${students.meta.count} coordinatees`, 'Found expected count of coordinatees');

    this.set('name', 'blue jay');

    assert.dom(this.element).hasText(`Found ${students.meta.count} blue jays`, 'Found expected blue jays');

    this.set('pluralName', 'squawking blue birds');
    assert.dom(this.element).hasText(`Found ${students.meta.count} squawking blue birds`, 'Found expected squawking blue birds');

    this.set('students', Object.assign({}, students, { meta: { count: 1 } }));
    assert.dom(this.element).hasText('Found 1 blue jay', 'Found 1 blue jay');

    this.set('students', Object.assign({}, students, { meta: { count: 0 } }));
    assert.dom(this.element).hasText('Found no squawking blue birds', 'Found no squawking blue birds');
  });

  test('it overrides count explicitly rather than passing a model', async function (assert) {
    this.setProperties({
      name: 'dude',
      count: 20,
    });

    await render(hbs`
      {{count-paragraph
        name=name
        count=count
      }}
    `);

    assert.ok(find(`p[data-test-count-paragraph="${this.count}"]`), 'expected counter rendered');

    assert.dom(this.element).hasText(`Found ${this.count} dudes`, 'Found expected count of dudes');
  });
});
