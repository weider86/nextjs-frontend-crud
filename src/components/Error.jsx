import { capitalize } from '../utils/capitalize';

const Error = (message) => (
  <div>
    {`Error on loading ${capitalize(`${message}`)}`}
    <span role='img' aria-label='sad'>
      😢
    </span>
  </div>
);

export { Error };
