export function useArticles({ limit = 100 }: { limit?: number }) {
  return useAsyncData<{ data: StatamicArticleEntry[] }>(
    'statamic-articles',
    () =>
      $fetch('/api/collections/articles/entries', {
        baseURL: useRuntimeConfig().public.statamicUrl,
        query: {
          limit: limit,
          fields:
            'id,title,summary,url,permalink,image,published,date,tags,author',
        },
      })
  );
}
