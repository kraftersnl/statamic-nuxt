import { mountSuspended } from '@nuxt/test-utils/runtime';
import { axe } from 'vitest-axe';
import { mockAsyncData } from '~/tests/setup';
import { mockCompanyData } from '~/tests/mockData';
import App from '~/app.vue';

describe.skip('App', () => {
  // TO DO: mock multiple instances of useAsyncData for main nav, page content and form requests
  mockAsyncData.mockReturnValue({
    data: ref({ data: mockCompanyData }),
  });

  it('has no accessibility violations', async () => {
    const wrapper = await mountSuspended(App, { route: '/' });
    console.log(wrapper.html());

    const results = await axe(wrapper.element);
    expect(results).toHaveNoViolations();
  });
});
