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

const version = '2.0.2';

var config = {
  version,
  createNamespace,
  getCurrentNamespace,
  switchNamespace,
  get: get$1,
  setSeparator,
  getSeparator,
};

function from(namespace) {
  if (namespace) {
    switchNamespace(namespace);
  }
}

function parse(value) {
  try {
    return JSON.parse(value);
  } catch (err) {
    return value;
  }
}

function get(key) {
  const seprator = getSeparator();
  const namespcaekey = `${getCurrentNamespace()}${seprator}${key}`;
  const value = this.storage.getItem(namespcaekey);

  if (value === 'null') {
    return null;
  }

  return parse(value);
}

function set(key, value) {
  const seprator = getSeparator();
  const namespcaekey = `${getCurrentNamespace()}${seprator}${key}`;

  if (value === null || value === undefined) {
    this.storage.setItem(namespcaekey, 'null');
  } else if (typeof value === 'object') {
    this.storage.setItem(namespcaekey, JSON.stringify(value));
  } else {
    this.storage.setItem(namespcaekey, String(value));
  }
}

function has(key) {
  return !!this.get(key);
}

function remove(key) {
  const seprator = getSeparator();
  const namespcaekey = `${getCurrentNamespace()}${seprator}${key}`;

  return this.storage.removeItem(namespcaekey);
}

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

function working(storage) {
  if (!storage) {
    return false;
  }
  return true;
}

const db = {
  config,
  local: storageoperations(ensureSupport(window.localStorage)),
  session: storageoperations(ensureSupport(window.sessionStorage)),
};

export { db as default };
//# sourceMappingURL=opendb.esm.js.map
