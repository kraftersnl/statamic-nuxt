export function useArticles() {
  return useAsyncData<{ data: StatamicArticleEntry[] }>(
    'statamic-articles',
    () =>
      $fetch('/api/collections/articles/entries', {
        baseURL: useRuntimeConfig().public.statamicUrl,
        query: {
          limit: 100,
          fields: 'id,title,summary,url,permalink,image,published,date',
        },
      })
  );
}
