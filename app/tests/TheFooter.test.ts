import { mountSuspended } from '@nuxt/test-utils/runtime';
import { axe } from 'vitest-axe';
import { mockCompanyData } from '~/tests/mockData';
import AppFooter from '~/components/the/TheFooter.vue';

describe('App Footer', () => {
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
