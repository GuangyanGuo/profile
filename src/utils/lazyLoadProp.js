/**
 * Sets a lazy loaded value to a given object
 * @param obj Object to add lazy property to
 * @param key Property name
 * @param fn Property initializer function
 */
function lazyLoadProp (obj, key, fn) {
  Object.defineProperty(obj, key, {
    get: () => {
      delete obj[key];
      return (obj[key] = fn());
    },
    configurable: true,
  });
}

export default lazyLoadProp;