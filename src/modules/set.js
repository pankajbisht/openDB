import { getCurrentNamespace, getSeparator } from '../config/config.js';


export default function set(key, value) {
    const seprator = getSeparator();
    const namespcaekey = `${getCurrentNamespace()}${seprator}${key}`

    if (value === null || value === undefined) {
        this.storage.setItem(namespcaekey, 'null');
    } else if (typeof value === 'object') {
        this.storage.setItem(namespcaekey, JSON.stringify(value));
    } else {
        this.storage.setItem(namespcaekey, String(value));
    }
}
