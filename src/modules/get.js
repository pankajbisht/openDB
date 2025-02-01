import { getCurrentNamespace, getSeparator } from '../config/config.js';
import parse from '../utils/index.js';

export default function get(key) {
  const seprator = getSeparator();
  const namespcaekey = `${getCurrentNamespace()}${seprator}${key}`;
  const value = this.storage.getItem(namespcaekey);

  if (value === 'null') {
    return null;
  }

  return parse(value);
}
