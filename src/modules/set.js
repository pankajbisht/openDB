import config from '../config/index.js';
import { isInvalidArg } from '../errors/isInvalidArg.js';

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

export default function set(key, value, options = {}) {
  if (isInvalidArg(key)) return null;
  const namespacedKey = config.generateKey(key);
  const { expire } = options;

  let items = {
    value,
    ...(expire ? { expire: Date.now() + expire } : {}),
  };

  this.storage.setItem(namespacedKey, JSON.stringify(items));
}
