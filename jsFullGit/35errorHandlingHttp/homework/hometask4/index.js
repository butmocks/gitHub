export const parseUser = stringJSON => {
  try {
    return JSON.parse(stringJSON);
  } catch (err) {
    return null;
  }
};
