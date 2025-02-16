import config from '../config/index.js';

/**
 * Remove a specific item from local or session storage.
 * @param {string} key - The key of the item to remove.
 * @returns {any | null} The removed item.
 */

export default function remove(key) {
  const deleteValue = this.get(key);
  const namespacedKey = config.generateKey(key);
  this.storage.removeItem(namespacedKey);

  return deleteValue;
}
