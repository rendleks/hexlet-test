const capitalize = (text) => {
  if (text === '') {
    return '';
  }

  const [firstChar, ...lastChars] = text;
  return `${firstChar.toUpperCase()}${lastChars.join('')}`;
};

export default capitalize;