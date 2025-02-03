export const config = {
  namespace: 'app',
  separator: '.',
  trimKeys: true,
  expiry: true,
};

export function createNamespace(namespace) {
  config.namespace = namespace;
}

export function switchNamespace(namespace) {
  config.namespace = namespace;
}

export function getCurrentNamespace() {
  return config.namespace;
}

export function get() {
  return config;
}

export function setSeparator(separator) {
  config.separator = separator;
}

export function getSeparator() {
  return config.separator;
}

export function generateKey(key) {
  return `${config.namespace}${config.separator}${key}`;
}
