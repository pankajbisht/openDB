import db from '../dist/opendb.js';

(function () {
    var dom  = document.getElementById("name"),
        form = document.forms["form"],
        name = form["name"];

    if (db.local.has("name")) {
        dom.style.color = "green";
        dom.previousElementSibling.style.background = "green";
        dom.textContent = db.local.get("name");
    }

    form.onsubmit = function () {
        var val = this["name"].value;
        dom.textContent = val;
        db.local.set("name", val);

        return false;
    };
}())
