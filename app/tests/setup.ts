import 'vitest-axe/extend-expect';
import { mockNuxtImport, registerEndpoint } from '@nuxt/test-utils/runtime';
import {
  mockCompanyData,
  mockMainNavData,
  mockPageData,
  mockFormData,
} from './mockData';

// mock external API
registerEndpoint('/api/globals/company', () => ({
  data: mockCompanyData,
}));

registerEndpoint('/api/navs/main/tree', () => ({
  data: mockMainNavData,
}));

registerEndpoint('/api/pages/entries', () => ({
  data: mockPageData,
}));

registerEndpoint('/api/forms/contact', () => ({
  data: mockFormData,
}));

// mock i18n
mockNuxtImport('useI18n', () => () => ({
  t: (value: string) => value,
  locale: ref('nl'),
}));

// mock useAsyncData
const { mockAsyncData } = vi.hoisted(() => ({
  mockAsyncData: vi.fn(),
}));

mockNuxtImport('useAsyncData', () => mockAsyncData);

// create element for teleport
beforeEach(() => {
  const el = document.createElement('div');
  el.id = 'teleports';
  document.body.appendChild(el);
});

afterEach(() => {
  document.body.innerHTML = '';
  mockAsyncData.mockReset();
});

export { mockAsyncData };
