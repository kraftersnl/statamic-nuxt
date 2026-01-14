export function useArticles({ limit = 100 }: { limit?: number }) {
  const route = useRoute();

  return useAsyncData<{ data: StatamicArticleEntry[] }>(
    'articles-' + route.path,
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
