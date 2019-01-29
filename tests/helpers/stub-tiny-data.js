import Service from '@ember/service';
import { getContext } from '@ember/test-helpers';
import { tinyDataService } from 'tinysis-ui/services/tiny-data';

export function getTinyData() {
  const { owner } = getContext();
  return owner.lookup('service:tiny-service-mock');
}

export function stubTinyData(overrides = {}) {
  const { owner } = getContext();

  const TinyDataServiceMock = { ...tinyDataService, ...overrides };

  owner.register('service:tiny-service-mock', Service.extend(TinyDataServiceMock));
  owner.inject('component', 'tinyData', 'service:tiny-service-mock');

  return getTinyData();
}
