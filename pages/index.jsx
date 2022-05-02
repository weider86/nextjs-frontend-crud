import React from 'react';
import { useArticlesQuery } from '../providers/queries/useArticlesQuery';
import { capitalize } from '../utils/capitalize';
import { Card } from '../components/Card';

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
          About project author
        </a>
      </div>
    </div>
  );
};

export default Articles;
