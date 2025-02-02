import util from '../utils/index.js';
import { getCurrentNamespace, getSeparator } from '../config/config.js';
import { isInvalidArg } from '../errors/isInvalidArg.js';

export default function get(key) {
  if (isInvalidArg(key)) return null;
  const seprator = getSeparator();
  const namespcaekey = `${getCurrentNamespace()}${seprator}${key}`;
  const value = this.storage.getItem(namespcaekey);

  if (util.isNull(value)) {
    return null;
  }

  return util.parse(value);
}
