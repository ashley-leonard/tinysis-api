import {
  createEntity,
  getChangedKeys,
  replaceModel,
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

  test('replaceModel works as expected', (assert) => {
    const list = [{
      id: '1',
    }, {
      id: '2',
    }];
    const newModel = {
      id: '3',
      attributes: {},
    };
    const updatedModel = {
      id: '2',
      attributes: {},
    };

    const listWithNewModel = replaceModel(list, newModel);
    assert.equal(list.length, 2, 'when adding a new model, original list was not altered');
    assert.equal(listWithNewModel.length, 3, 'when adding a new model, result was increased by 1');
    assert.ok(listWithNewModel.find(m => m.id === newModel.id), 'new model is in list');

    const listWithExistingModel = replaceModel(list, updatedModel);
    assert.equal(list.length, 2, 'when adding an existing model, original list was not altered');
    assert.equal(listWithExistingModel.length, 2, 'when adding an existing model, result was not increased by 1');

    const model = listWithExistingModel.find(m => m.id === updatedModel.id);
    assert.ok(model, 'updated model is in list');
    assert.ok(model.attributes, 'updated model is in list');
  });
});
