export function useCases({ limit = 100 }: { limit?: number }) {
  const route = useRoute();

  return useAsyncData<{ data: StatamicCaseEntry[] }>(
    'cases-' + route.path,
    () =>
      $fetch('/api/collections/cases/entries', {
        baseURL: useRuntimeConfig().public.statamicUrl,
        query: {
          limit: limit,
          sort: 'order',
          fields:
            'id,title,summary,blocks,url,permalink,image,tags,sub_title,order',
        },
      })
  );
}
