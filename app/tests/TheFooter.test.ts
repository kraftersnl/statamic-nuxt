import { mountSuspended } from '@nuxt/test-utils/runtime';
import { axe } from 'vitest-axe';
import { mockAsyncData } from '~/tests/setup';
import { mockCompanyData, mockFooterNavData } from '~/tests/mockData';
import AppFooter from '~/components/the/TheFooter.vue';

describe('App Footer', () => {
  mockAsyncData.mockReturnValue({
    data: ref({ data: mockFooterNavData }),
  });

  it('has no accessibility violations', async () => {
    const wrapper = await mountSuspended(AppFooter, {
      props: {
        data: mockCompanyData,
      },
    });

    const results = await axe(wrapper.element);

    expect(results).toHaveNoViolations();
  });
});
