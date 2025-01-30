export const config = {
    namespace: "app",
    separator: ".",
    trimKeys: true,
    expiry: true
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

export function getSeparator(separator) {
    return config.separator;
}
