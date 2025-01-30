import { getCurrentNamespace, getSeparator } from '../config/config.js';

export default function get(key) {
    const seprator = getSeparator();
    const namespcaekey = `${getCurrentNamespace()}${seprator}${key}`
    const value = this.storage.getItem(namespcaekey);

    if (value === 'null') {
        return null;
    }

    try {
        return JSON.parse(value);
    } catch (e) {
        return value;
    }
}
