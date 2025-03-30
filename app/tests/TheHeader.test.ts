import { mountSuspended } from '@nuxt/test-utils/runtime';
import { axe } from 'vitest-axe';
import { mockAsyncData } from '~/tests/setup';
import { mockMainNavData } from '~/tests/mockData';
import AppHeader from '~/components/the/TheHeader.vue';

describe('App Header', () => {
  mockAsyncData.mockReturnValue({
    data: ref({ data: mockMainNavData }),
  });

  it('has no accessibility violations', async () => {
    const wrapper = await mountSuspended(AppHeader);
    const results = await axe(wrapper.element);
    expect(results).toHaveNoViolations();
  });
});
