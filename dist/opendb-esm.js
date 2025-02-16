const config$1 = {
  namespace: 'app',
  separator: '.',
  trimKeys: true,
  expiry: true,
};

function createNamespace(namespace) {
  config$1.namespace = namespace;
}

function switchNamespace(namespace) {
  config$1.namespace = namespace;
}

function getCurrentNamespace() {
  return config$1.namespace;
}

function get$1() {
  return config$1;
}

function setSeparator(separator) {
  config$1.separator = separator;
}

function getSeparator() {
  return config$1.separator;
}

function generateKey(key) {
  return `${config$1.namespace}${config$1.separator}${key}`;
}

const version = '1.1.1';

var config = {
  version,
  createNamespace,
  getCurrentNamespace,
  switchNamespace,
  get: get$1,
  setSeparator,
  getSeparator,
  generateKey,
};

function from(namespace) {
  if (namespace) {
    switchNamespace(namespace);
  }
}

/**
 * Parses the given value.
 *
 * @param value - The value to parse.
 * @returns The parsed result.
 */

function parse(value) {
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}

/**
 * Checks if the given value is undefined.
 *
 * @param obj - The value to check.
 * @returns True if the value is undefined, otherwise false.
 */

function isUndefined(obj) {
  return obj === void 0;
}

/**
 * Checks if the given value is null.
 *
 * @param obj - The value to check.
 * @returns True if the value is null, otherwise false.
 */

function isNull(obj) {
  return obj === null || obj === 'null';
}

var util = {
  parse,
  isUndefined,
  isNull,
};

function isInvalidArg(key) {
  return isUndefined(key) || isNull(key);
}

/**
 * Retrieves data from local or session storage by key. Returns defaultValue if the key does not exist.
 *
 * If the key does not exist or the stored item has expired, returns the defaultValue.
 * If the stored value was serialized, it is parsed back to its original type.
 *
 * @param {string} key - The key to retrieve from localStorage.
 * @param {any} defaultValue - The value to return if the key is not found or is expired.
 * @returns {any} The retrieved value (parsed if needed) or the defaultValue.
 */

function get(key, defaultValue = null) {
  if (isInvalidArg(key)) return null;
  const namespacedKey = config.generateKey(key);
  const value = this.storage.getItem(namespacedKey);

  if (util.isNull(value)) {
    return defaultValue;
  }

  try {
    let parsedData = util.parse(value);

    if (parsedData.expire && Date.now() > parsedData.expire) {
      this.remove(key);
      return defaultValue;
    }

    return parsedData.value;
  } catch {
    return defaultValue;
  }
}

/**
 * Stores data in local or session storage with a key and value.
 *
 * The value will be stored as a JSON string by default. You can customize behavior using the options object.
 *
 * @param {string} key - The key under which to store the value.
 * @param {any} value - The value to store. It can be any type.
 * @param {Object} [options={}] - Optional settings for storing the value.
 * @param {number} [options.expire] - Optional expiration time in milliseconds.
 * @returns {void}
 */

function set(key, value, options = {}) {
  if (isInvalidArg(key)) return null;
  const namespacedKey = config.generateKey(key);
  const { expire } = options;

  let items = {
    value,
    ...(expire ? { expire: Date.now() + expire } : {}),
  };

  this.storage.setItem(namespacedKey, JSON.stringify(items));
}

/**
 * Check whether a specified key exists in local or session storage
 *
 * @param {string} key - The key to check in local or session storage.
 * @returns {boolean} True if the key exists, false otherwise.
 */

function has(key) {
  return !!this.get(key);
}

/**
 * Remove a specific item from local or session storage.
 * @param {string} key - The key of the item to remove.
 * @returns {any | null} The removed item.
 */

function remove(key) {
  const deleteValue = this.get(key);
  const namespacedKey = config.generateKey(key);
  this.storage.removeItem(namespacedKey);

  return deleteValue;
}

/**
 * Empty the entire local or session storage.
 *
 * This function removes all keys and values stored in local or session storage.
 *
 * @returns {void}
 */

function clear() {
  return this.storage.clear();
}

function key(index) {
  return this.storage.key(index);
}

function keys() {
  const keys = [];

  for (let index = 0; index < this.storage.length; index++) {
    keys.push(this.storage.key(index));
  }

  return keys;
}

/**
 * Trims whitespace from both ends of the given string.
 *
 * @param key - The string to trim.
 * @returns The trimmed string.
 */

function trim(key) {
  return this.storage.get(key).trim();
}

function setFormattedData(key, obj) {
  const seprator = getSeparator();

  for (let k in obj) {
    if (k in obj) {
      this.set(`${key}${seprator}${k}`, obj[k]);
    }
  }
}

function getFormattedData(key) {
  const result = {};
  const seprator = getSeparator();

  for (let i = 0, size = this.storage.length; i < size; i++) {
    const completkey = this.key(i);
    const [, objectkey, currentkey] = completkey.split(`${seprator}`, 3);

    if (objectkey === key && currentkey) {
      result[currentkey] = this.get(`${objectkey}${seprator}${currentkey}`);
    }
  }

  return result;
}

var storageMethods = {
  from,
  get,
  set,
  has,
  remove,
  clear,
  key,
  keys,
  trim,
  getFormattedData,
  setFormattedData,
};

function storageoperations(storage) {
  return {
    storage,
    get count() {
      return storage.length;
    },
    ...storageMethods,
  };
}

function ensureSupport(storage) {
  if (!storage) {
    throw new Error('Storage is not supported in this environment.');
  }
  return storage;
}

const db = {
  config,
  local: storageoperations(ensureSupport(window.localStorage)),
  session: storageoperations(ensureSupport(window.sessionStorage)),
};

export { db as default };
//# sourceMappingURL=opendb-esm.js.map
