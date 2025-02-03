import config from '../config/index.js';
import { isInvalidArg } from '../errors/isInvalidArg.js';

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
