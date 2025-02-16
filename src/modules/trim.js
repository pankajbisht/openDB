/**
 * Trims whitespace from both ends of the given string.
 *
 * @param key - The string to trim.
 * @returns The trimmed string.
 */

export default function trim(key) {
  return this.storage.get(key).trim();
}
