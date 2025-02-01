import { getSeparator } from '../config/config.js';

export default function getFormattedData(key) {
  const result = {};
  const seprator = getSeparator();

  for (let i = 0, size = this.storage.length; i < size; i++) {
    const completkey = this.key(i);
    const [, objectkey, currentkey] = completkey.split(`${seprator}`, 3);

    if (objectkey === key && currentkey) {
      result[currentkey] = this.get(`${objectkey}${seprator}${currentkey}`);
    }
  }

  return result;
}
