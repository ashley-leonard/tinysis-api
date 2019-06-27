import {
  createEntity,
  getChangedKeys,
} from 'tinysis-ui/utils/json-api';
import { module, test } from 'qunit';

module('Unit | Utility | json-api', () => {
  test('getChangedKeys works as expected', (assert) => {
    const orig = {
      id: '1',
      type: 'contract',
      attributes: {
        name: 'Jam',
        bool: true,
        date: '2009-09-01',
      },
    };

    const altered = {
      id: '1',
      type: 'contract',
      attributes: {
        name: 'Jam',
        bool: false,
        date: '2009-09-02',
      },
    };

    const changed = getChangedKeys(orig, altered);

    assert.equal(changed.length, 2, 'expected return value of an array with appropriate count of elements');
    assert.ok(changed.includes('bool'), 'boolean attribute detected');
    assert.ok(changed.includes('date'), 'string attribute detected');
    assert.notOk(changed.includes('name'), 'name did not falsely detect');
  });

  test('createEntity works as expected', (assert) => {
    const contract = {
      id: '1',
      type: 'contract',
      attributes: {
        name: 'Jam',
      },
    };
    const user = {
      id: '2',
      type: 'user',
      attributes: {
        name: 'Jom',
      },
    };

    let entity = createEntity('bam', { boof: 'biff' });

    assert.ok(entity, 'entity created');
    assert.notOk(entity.relationships, 'no relationships tree necessary');
    assert.ok(entity.attributes, 'attributes present');
    assert.equal(entity.attributes.boof, 'biff', 'attribute copied');

    entity = createEntity('bam', { boof: 'biff' }, contract);
    assert.ok(entity.relationships, 'relationships now necessary');
    assert.equal(entity.relationships.contract.data.id, contract.id, 'id copied to relationship');
    assert.equal(entity.relationships.contract.data.type, contract.type, 'type copied to relationship');

    entity = createEntity('bam', { boof: 'biff' }, contract, user);
    assert.ok(entity.relationships, 'relationships now necessary');
    assert.equal(entity.relationships.user.data.id, user.id, 'id copied to relationship');
    assert.equal(entity.relationships.user.data.type, user.type, 'type copied to relationship');
  });
});
