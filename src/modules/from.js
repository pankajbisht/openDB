import { switchNamespace } from '../config/config.js';

export default function from(namespace) {
  if (namespace) {
    switchNamespace(namespace);
  }
}
