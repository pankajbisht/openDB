import * as db from "./module/index";

var Main = (function () {
    var odb = {}, local = localStorage, session = sessionStorage;
    odb.local = Operations(local);
    odb.session = Operations(session);

    return odb;
})

export default db;