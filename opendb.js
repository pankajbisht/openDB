/*
    Developer: Pankaj Bisht,
    OpenDB is utitlity to manage local, session, cookie in browser..
*/

(function () {
    "use strict";

    var Operations = function (storage) {
        var get, set, has, remove, clean, parse, string, setJSON, getJSON,
        trim, count, trim, key, setMore, removeMore, getMore, counter, resetCounter,
        keys, getVLStartWith, getOBStartWith, entire;

        get = function (key) {
            return storage.getItem(key);
        };

        set = function (key, value) {
            storage.setItem(key, value);
        };

        has = function (key) {
            return !!storage.getItem(key);
        };

        remove = function (key) {
            return storage.removeItem(key);
        };

        clean = function () {
            storage.clear();
        };

        parse = function (obj) {
            return JSON.parse(obj);
        };

        string = function (obj) {
            return JSON.stringify(obj);
        };

        setJSON = function (key, obj) {
            this.set(key, this.string(obj));
        };

        getJSON = function (key) {
            return this.parse(this.get(key));
        };

        trim = function (key) {
            return this.get(key).replace(/(^\s*)|(\s*$)/g, "");;
        };

        count = function () {
            return storage.length;
        };

        key = function (i) {
            return storage.key(i);
        };

        setMore = function (obj) {
            var len = Object.keys(obj).length, i = 0, keys = Object.keys(obj),
                    child = MyError;

            child.isValid(obj, "object");

            while (len--) {
                this.set(keys[i], obj[keys[i]]);
                i++;
            }

            return true;
        };

        removeMore = function (coll) {
            var len = coll.length, i = 0, arr = [],
                child = MyError;


            child.isValid(coll, "array");

            while(len--) {
                this.remove(coll[i]);
                i++;
            }

            return true;
        };

        getMore = function (coll) {
            var len = coll.length, i = 0, arr = [],
                child = MyError;

            child.isValid(coll, "array");

            while(len--) {
                arr.push(this.get(coll[i]));
                i++;
            }

            return arr;
        };

        counter = function () {
            var get = parseInt(this.get("counter"));
            var val = get ? get : 0;

            this.set("counter", ++val);
            return parseInt(this.get("counter"));
        };

        resetCounter = function () {
            this.remove("counter");
        };

        keys = function () {
            var len = storage.length, arr = [];

            for (var i = 0; i < len; i++) {
                arr.push(storage.key(i));
            };

            return arr;
        };

        getVLStartWith = function (str, start, end) {
            var len = this.count(), i = 0, arr = [];

            while (len--) {

                var key = this.key(i); //here

                if (key.substring(start, end) === str) {
                    arr.push(this.get(key)); //here
                }

                i++;
            }

            return arr;
        };

        getOBStartWith = function (str, start, end) {
            var len = this.count(), i = 0, obj = {};

            while (len--) {

                var key = this.key(i); //here

                if (key.substring(start, end) === str) {
                    obj[key] = key;
                    obj[key] = this.get(key); //here
                }

                i++;
            }

            return obj;
        };

        entire = function (str, start, end) {
            var len = this.count(), i = 0, obj = {};

            while (len--) {

                var key = this.key(i); //here

                obj[key] = key;
                obj[key] = this.get(key); //here
                i++;
            }

            return obj;
        };

        return {
            get: get,
            set: set,
            has: has,
            remove: remove,
            clean: clean,
            parse: parse,
            string: string,
            setJSON: setJSON,
            getJSON: getJSON,
            count: count,
            trim: trim,
            key: key,
            setMore: setMore,
            removeMore: removeMore,
            getMore: getMore,
            counter: counter,
            resetCounter: resetCounter,
            keys: keys,
            getVLStartWith: getVLStartWith,
            getOBStartWith: getOBStartWith,
            entire: entire
        };
    };

    var Cookie = (function () {
        var set, get, has, entire;

        set = function (key, value, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
            var expires = "expires=" + d.toGMTString();
            document.cookie = key + "=" + value +"; " + expires;
        };

        get = function (key) {
            var name = key + "=";
            var ca = document.cookie.split(';');

            for(var i = 0; i < ca.length; i++) {
                var c = ca[i];

                while (c.charAt(0) === ' ') c = c.substring(1);

                if (c.indexOf(name) ===  0) {
                    return c.substring(name.length, c.length);
                }
            }

            return "";
        };

        has = function (key) {
            return !!this.get(key);
        };

        entire = function () {
            return document.cookie;
        };

        return {
            get: get,
            set: set,
            has: has,
            entire: entire
        };
    }());

    var MyError = (function () {
    var type, isValid;

    type = (function (global) {
        var cache = {};

        return function(obj) {
            var key;

            return obj === null ? 'null' // null
                : obj === global ? 'global' // window in browser or global in nodejs
                : (key = typeof obj) !== 'object' ? key // basic: string, boolean, number, undefined, function
                : obj.nodeType ? 'object' // DOM element
                : cache[key = ({}).toString.call(obj)] // cached. date, regexp, error, object, array, math
                || (cache[key] = key.slice(8, -1).toLowerCase()); // get XXXX from [object XXXX], and cache it
        };
    }(this));

    isValid = function () {
        var arg = arguments, len = arguments.length, first = arg[0], last = arg[len - 1];

        console.info(arg[0]);

        if (len === 2) {
            console.log(this.type(first) + "----" + last);
            if (this.type(first) === last) return true;
            else { throw "Your argument should be " + last; return false; }
        }
    };

    return {
        type: type,
        isValid: isValid
    };
}());

    var Testing = (function () {
    var log, assert;

    log = function (msg) {
        console.log(msg);
    };

    assert = function (expression, object) {
      console.assert(expression, object);
    };

    return {
        log: log,
        assert: assert
    };
}());

    var WEBSQL = (function () {
    var initDB,
        createTable,
        insertRow,
        getRows,
        deleteRows,
        db,
        err;

    initDB = function (name, version, description, size) {

        db = openDatabase(name, version, description, size);
    };

    createTable = function (query) {
        db.transaction(function(tx) {
            tx.executeSql(query, []);
        });
    };

    insertRow = function (query, data, callback) {
        db.transaction(function(tx){
            tx.executeSql(query,
                data,
                callback,
                err);
        });
    };

    getRows = function (query, callback) {
        db.transaction(function(tx){
            tx.executeSql(query,
                [],
                callback,
                err);
        });
    };

    deleteRows = function (query, info, callback) {
        db.transaction(function(tx){
            tx.executeSql(query, info,
                callback,
                err);
        });
    } ;

    err = function (tx, e) {
        console.info("ERROR ::");
        console.error("Error due to ::" + e.message);
    };

    return {
        initDB: initDB,
        createTable: createTable,
        insertRow: insertRow,
        getRows: getRows,
        deleteRows: deleteRows
    }
}());

    var Main = (function () {

    var odb = {}, local = localStorage, session = sessionStorage;

    odb.local = Operations(local);
    odb.session = Operations(session);
    odb.cookie = Cookie;
    odb.test = Testing;
    odb.type = MyError;
    odb.websql = WEBSQL;

    odb.working = function () {

        try {

            return 'localStorage' in window && window['localStorage'] !== null;
        } catch (e) {

            return false;
        }
    };

    return odb;
}());

    window.db = Main;
}());
