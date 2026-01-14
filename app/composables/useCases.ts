export function useCases({ limit = 100 }: { limit?: number }) {
  return useAsyncData<{ data: StatamicCaseEntry[] }>('statamic-cases', () =>
    $fetch('/api/collections/cases/entries', {
      baseURL: useRuntimeConfig().public.statamicUrl,
      query: {
        limit: limit,
        fields: 'id,title,summary,blocks,url,permalink,image',
      },
    })
  );
}
