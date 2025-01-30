import { getCurrentNamespace, getSeparator } from '../config/config.js';

export default function remove(key) {
    const seprator = getSeparator();
    const namespcaekey = `${getCurrentNamespace()}${seprator}${key}`;

    return this.storage.removeItem(namespcaekey);
}
