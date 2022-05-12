import React from 'react';
import { Error } from '../src/components/Error';
import { Loading } from '../src/components/Loading';
import { useAuthorQuery } from '../src/providers/queries/useAuthorQuery';
import { capitalize } from '../src/utils/capitalize';

const name = 'author';
const githubUrl = 'https://github.com/weider86';
const emailAddress = 'weider86@gmail.com';

const Author = () => {
  const { data: author, isLoading, isIdle, isError } = useAuthorQuery();

  if (isLoading || isIdle) {
    return <Loading message={name} />;
  }

  if (isError) {
    return <Error message={name} />;
  }

  return (
    <div id={name} aria-label={name}>
      <h1>{capitalize(name)}</h1>
      <div>
        <ul>
          <li>name: {author.name}</li>
          <li>bio: {author.bio}</li>
          <li>location: {author.location}</li>
          <li>
            email:
            <a href={`mailto:${emailAddress}`} target='_blank'>
              {emailAddress}
            </a>
          </li>
          <li>
            github:
            <a href={{ githubUrl }} target='_blank'>
              {githubUrl}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Author;
