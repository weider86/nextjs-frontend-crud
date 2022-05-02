import { useRouter } from 'next/router';
import React from 'react';
import { useArticleByIdQuery } from '../providers/queries/useArticleByIdQuery';
import { Error } from '../src/components/Error';
import { Loading } from '../src/components/Loading';
import { capitalize } from '../utils/capitalize';

const name = 'article';

const Article = () => {
  const router = useRouter();
  const articleId = typeof router.query?.id === 'string' ? router.query.id : '';

  const {
    data: article,
    isLoading,
    isIdle,
    isError,
  } = useArticleByIdQuery(articleId);

  if (isLoading || isIdle) {
    return <Loading message={name} />;
  }

  if (isError) {
    return <Error message={name} />;
  }

  return (
    <div id={name} aria-label={name}>
      <h1>{capitalize(name)}</h1>
      <h2>{article.title}</h2>
      <div>{article.content}</div>
    </div>
  );
};

export default Article;
