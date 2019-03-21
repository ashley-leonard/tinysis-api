import Service from '@ember/service';
import { getContext } from '@ember/test-helpers';
import { tinyDataService, clone as _clone } from 'tinysis-ui/services/tiny-data';

export function getTinyData() {
  const { owner } = getContext();
  return owner.lookup('service:tiny-service-mock');
}

export function buildTinyData(overrides = {}) {
  return { ...tinyDataService, ...overrides };
}

export function stubTinyData(overrides = {}) {
  const { owner } = getContext();

  const tinyDataServiceMock = buildTinyData(overrides);

  owner.register('service:tiny-service-mock', Service.extend(tinyDataServiceMock));
  owner.inject('component', 'tinyData', 'service:tiny-service-mock');

  return getTinyData();
}

export const clone = _clone;
