import { capitalize } from '../utils/capitalize';

const Loading = (message) => {
  return <div>{`Loading ${capitalize(`${message}`)}...`}</div>;
};

export { Loading };
