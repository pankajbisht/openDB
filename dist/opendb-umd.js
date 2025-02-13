(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define('db', factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (function () {
    var current = global.db;
    var exports = global.db = factory();
    exports.noConflict = function () { global.db = current; return exports; };
  })());
})(this, (function () {
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

  const version = '1.0.5';

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

  function parse(value) {
    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  }

  // Is a given variable undefined?
  function isUndefined(obj) {
    return obj === void 0;
  }

  // Is a given value equal to null?
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

  function has(key) {
    return !!this.get(key);
  }

  function remove(key) {
    const namespacedKey = config.generateKey(key);

    return this.storage.removeItem(namespacedKey);
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

  const db = {
    config,
    local: storageoperations(ensureSupport(window.localStorage)),
    session: storageoperations(ensureSupport(window.sessionStorage)),
  };

  return db;

}));
//# sourceMappingURL=opendb-umd.js.map
