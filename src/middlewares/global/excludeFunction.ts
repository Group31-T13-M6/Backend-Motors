const exclude = (object: object, keys: string[]) => {
  for (let key of keys) {
    delete object[key];
  }
  return object;
};

export { exclude };
