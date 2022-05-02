import React from 'react';
import { useArticlesQuery } from '../src/providers/queries/useArticlesQuery';
import { capitalize } from '../src/utils/capitalize';
import { Card } from '../src/components/Card';

const name = 'articles';

const Articles = () => {
  const { data: articles, isLoading, isIdle, isError } = useArticlesQuery();

  if (isLoading || isIdle) {
    return <div>{`Loading ${name}...`}</div>;
  }

  if (isError) {
    return (
      <div>
        {`Error on loading ${capitalize(name)}`}
        <span role='img' aria-label='sad'>
          😢
        </span>
      </div>
    );
  }

  return (
    <div id={name} aria-label={name}>
      <h1>{capitalize(name)}</h1>
      <Card>
        <ul>
          {articles.map((article) => (
            <li>
              <a href={`/${article._id}`} target='_blank'>
                {article.title}
              </a>
            </li>
          ))}
        </ul>
      </Card>
      <div>
        <a href='/author' target='_blank'>
          About project author xpto
        </a>
      </div>
    </div>
  );
};

export default Articles;
