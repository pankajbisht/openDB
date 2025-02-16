/**
 * Check whether a specified key exists in local or session storage
 *
 * @param {string} key - The key to check in local or session storage.
 * @returns {boolean} True if the key exists, false otherwise.
 */

export default function has(key) {
  return !!this.get(key);
}
