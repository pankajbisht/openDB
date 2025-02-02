import db from "../src/index.js"

db.local.set("new", "asdads");

console.log(db.local.key())
console.log(db.local.keys());

console.log("..", db.local.get())
console.log("..", db.local.get("asdasd"))
console.log("..", db.local.get(""))
console.log("..", db.local.get("null"))
console.log("..", db.local.get(null))
console.log("..", db.local.get(undefined))





console.log("..", db.local.has())
