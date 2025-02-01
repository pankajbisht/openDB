import db from "../dist/opendb.js";

(function () {
  var dom = document.getElementById("name"),
    form = document.forms["form"];

  if (db.local.has("name")) {
    domStylingAfterStore(() => {
      console.log("Get Data From Store");
    });
  }

  function domStylingAfterStore(callback) {
    dom.textContent = db.local.get("name");
    dom.style.color = "green";
    dom.previousElementSibling.style.background = "green";

    callback();
  }

  form.onsubmit = function () {
    var val = this["name"].value;
    dom.textContent = val;
    db.local.set("name", val);

    domStylingAfterStore(() => {
      this["name"].value = "";
    });

    return false;
  };
})();
