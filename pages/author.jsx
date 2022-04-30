import React from 'react';
import { useAuthorQuery } from '../providers/useAuthorQuery';
import { capitalize } from '../utils/capitalize';

const name = 'author';
const githubUrl = 'https://github.com/weider86';
const emailAddress = 'weider86@gmail.com';

const Author = () => {
  const { data: author, isLoading, isIdle, isError } = useAuthorQuery();

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
