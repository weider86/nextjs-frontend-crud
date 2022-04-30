const capitalize = (text) =>
  text ? `${text[0].toUpperCase()}${text.slice(1)}` : '';

const capitalizeWords = (text) =>
  text
    ?.trim()
    .split(' ')
    .map((l) => l.charAt(0).toUpperCase() + l.slice(1))
    .join(' ') ?? '';

export { capitalize, capitalizeWords };
