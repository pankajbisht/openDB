/**
 * Created by pankaj on 23/11/15.
 */


var WEBSQL = function () {
    var initDB,
        createTable,
        insertRow,
        getRows,
        deleteRows,
        db,
        err;

    initDB = function (name, version, description, size) {
        this.name = name;
        this.version = version;
        this.description = description;
        this.size = size;

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
        deleteRows: deleteRows,
        name: this.name,
        version: this.version,
        description: this.description,
        size: this.size
    }
};