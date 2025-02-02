import isNull from '../utils/isNull.js';
import isUndefined from '../utils/isUndefined.js';

export function isInvalidArg(key) {
  return isUndefined(key) || isNull(key);
}
