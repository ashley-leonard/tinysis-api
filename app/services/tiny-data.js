import Service from '@ember/service';
import moment from 'moment';
import { warn } from '../utils/logger';
import fetch from '../utils/fetch';

function clone(fixture) {
  return JSON.parse(JSON.stringify(fixture));
}

export const tinyDataService = {
  init(...args) {
    this.flush();
    this._super(...args);
    this.setToday(new Date());
  },

  getToday() {
    return this._data.today;
  },

  setToday(date) {
    this._data.today = date && moment(date);
  },

  getUser() {
    return this._data.user;
  },

  setUser(user) {
    this._data.user = user;
  },

  setSchoolYear(schoolYear) {
    this._data.schoolYear = schoolYear;
  },

  getSchoolYear() {
    return parseInt(this._data.schoolYear, 10);
  },

  flush() {
    this._store = {};
    this._data = {};
  },

  fetch(...args) {
    return fetch(...args)
      .then((result) => {
        this.addResult(result);
        return result;
      });
  },

  addResult(result) {
    const additions = {};

    function _add(entity) {
      additions[entity.type] = Object.assign({}, additions[entity.type] || {});
      additions[entity.type][entity.id] = Object.assign({}, entity);
    }

    const data = Array.isArray(result.data) ? result.data : [result.data];

    data.forEach((entity) => {
      _add(entity);
    });

    const included = result.included || [];
    included.forEach((entity) => {
      _add(entity);
    });

    const store = this._store;

    const mergedAdditions = Object.keys(additions)
      .reduce((memo, type) => {
        const storeForType = store[type] || {};
        const additionsForType = additions[type];
        const addedIds = Object.keys(additionsForType);

        // merge new attributes into existing attributes and retain
        // that merged object as the incoming entity. any relationships
        // are retained from the newest object received.
        //
        addedIds.forEach((addedId) => {
          const existingObject = storeForType[addedId] || {};
          const newObject = additionsForType[addedId];

          // build a new object. new base-level attributes are merged with
          // the old.
          additionsForType[addedId] = {
            ...existingObject,
            ...newObject,
          };
        });

        // replace the type-store with the merge of the new (merged) data
        // and the old.
        memo[type] = { ...storeForType, ...additionsForType };
        return memo;
      }, {});

    this._store = Object.assign({}, store, mergedAdditions);
  },

  get(type, id) {
    try {
      const records = this._store[type];

      if (!records) throw new Error('unknown or unfetched');

      if (id) return clone(records[id]);

      return clone(Object.keys(records).map(key => clone(records[key])));
    } catch (e) {
      warn('JSON-API-STORE', 'no entity matching', type, id);
      return null;
    }
  },

  addRecord(data) {
    this.addResult({ data });
  },
};

export default Service.extend(tinyDataService);
