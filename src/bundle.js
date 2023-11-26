function set(key, value) {
    localStorage.setItem(key, value);
}

function get(key) {
    return localStorage.getItem(key);
}

var db = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get: get,
    set: set
});

export { db as default };
