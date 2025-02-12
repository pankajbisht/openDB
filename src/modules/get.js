import util from '../utils/index.js';
import { isInvalidArg } from '../errors/isInvalidArg.js';
import config from '../config/index.js';

export default function get(key, defaultValue = null) {
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
