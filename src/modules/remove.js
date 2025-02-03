import config from '../config/index.js';

export default function remove(key) {
  const namespacedKey = config.generateKey(key);

  return this.storage.removeItem(namespacedKey);
}
