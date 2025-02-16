/**
 * Empty the entire local or session storage.
 *
 * This function removes all keys and values stored in local or session storage.
 *
 * @returns {void}
 */

export default function clear() {
  return this.storage.clear();
}
