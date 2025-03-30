import { mountSuspended } from '@nuxt/test-utils/runtime';
import { axe } from 'vitest-axe';
import { mockAsyncData } from '~/tests/setup';
import { mockPageData, mockFormData } from '~/tests/mockData';
import PageBlockMapper from '~/components/page/PageBlockMapper.vue';

describe('Page Block Mapper', () => {
  mockAsyncData.mockReturnValue({
    data: ref({ data: mockFormData }),
  });

  it('has no accessibility violations', async () => {
    const wrapper = await mountSuspended(PageBlockMapper, {
      props: {
        data: mockPageData[0]?.blocks,
      },
    });

    const results = await axe(wrapper.element, {
      rules: {
        region: { enabled: false },
      },
    });

    expect(results).toHaveNoViolations();
  });
});
