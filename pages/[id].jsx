import { useRouter } from 'next/router';
import React from 'react';
import { useArticleByIdQuery } from '../providers/useArticleByIdQuery';
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
    return <div>{`Loading ${name}...`}</div>;
  }

  if (isError) {
    return (
      <div>
        {`Error on loading ${name}`}
        <span role='img' aria-label='sad'>
          😢
        </span>
      </div>
    );
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
