import React from 'react';
import { Card } from '../src/components/Card';
import { Error } from '../src/components/Error';
import { List, ListItem } from '../src/components/List';
import { Loading } from '../src/components/Loading';
import { Title } from '../src/components/Title';
import { Author } from '../src/modules/Author';
import { useArticlesQuery } from '../src/providers/queries/useArticlesQuery';
import { capitalize } from '../src/utils/capitalize';

const name = 'articles';

const Articles = () => {
  const { data: articles, isLoading, isIdle, isError } = useArticlesQuery();

  if (isLoading || isIdle) {
    return <Loading message={name} />;
  }

  if (isError) {
    return <Error message={name} />;
  }

  return (
    <div id={name} aria-label={name}>
      <Title>{capitalize(name)}</Title>
      <Card>
        <List>
          {articles.map((article) => (
            <ListItem>
              <a href={`/${article._id}`} target='_blank'>
                {capitalize(article.title)}
              </a>
            </ListItem>
          ))}
        </List>
      </Card>
      <Author />
    </div>
  );
};

export default Articles;
