/**
 * Parses the given value.
 *
 * @param value - The value to parse.
 * @returns The parsed result.
 */

export default function parse(value) {
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}
