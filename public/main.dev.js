import db from "../src/index.js"

db.local.set('name', 'opendb');
console.log(db.local.get('name'))
