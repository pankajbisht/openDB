import { getSeparator } from '../config/config.js';

export default function setFormattedData(key, obj) {
  const seprator = getSeparator();

  for (let k in obj) {
    if (k in obj) {
      this.set(`${key}${seprator}${k}`, obj[k]);
    }
  }
}
