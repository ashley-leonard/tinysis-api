import EmberObject from '@ember/object';
import ContractRelationsMixin from 'tinysis-ui/mixins/contract-relations';
import { module, test } from 'qunit';

import { buildTinyData } from '../../helpers/stub-tiny-data';
import contractDetailFixture from '../../fixtures/contract-detail';

let tinyDataServiceMock;
let contract;

module('Unit | Mixin | contract-relations', (hooks) => {
  hooks.beforeEach(() => {
    tinyDataServiceMock = buildTinyData();

    // this is called on init by the service
    tinyDataServiceMock._init();

    tinyDataServiceMock.addResult(contractDetailFixture);

    contract = tinyDataServiceMock.get('contract', contractDetailFixture.data.id);
  });

  test('it can be mixed into an object', (assert) => {
    const ContractRelationsObject = EmberObject.extend(ContractRelationsMixin);
    const subject = ContractRelationsObject.create({
      contract,
      tinyData: tinyDataServiceMock,
    });
    assert.ok(subject);
  });

  test('it can retrieve relations', (assert) => {
    const ContractRelationsObject = EmberObject.extend(ContractRelationsMixin);
    const subject = ContractRelationsObject.create({
      contract,
      tinyData: tinyDataServiceMock,
    });

    ['facilitator', 'creditAssignments', 'assignments', 'meetings', 'category'].forEach((relation) => {
      const relationResult = subject.get(relation);
      assert.ok(relationResult, `relation ${relation} is retrievable and truthy`);
    });
  });
});
