# What is OpenDB?
OpenDB is a utility to manage local, sessions, and cookies in the browser.

# Browser Support
The numbers in the table specify the first browser version that fully supports Local Storage.

Chrome – 4.0

Ie – 8.0

Mozilla Firefox – 3.5

Safari – 4.0

Opera – 11.5

#Use of local and session storage with a simple example

    <!DOCTYPE html>

    <html lang="en">

    <head><title>OpenDB</title></head>

    <body>

	<script src="opendb.js"></script>

  	<script>

    		(function () {

      			// Working is a method to find your browser support localstorage or session storage if supported then you will get true and otherwise false

			console.log(db.working());  // true means you can work on it
    		}());

  	</script>

    </body>

    </html>


# Main db object method

working() - checks local storage and session storage working on your system

#Main db object objects

local  -  Contain localStorage methods

session  -  Contain sessionStorage methods

cookie - Contain cookie methods

test  -  Contain testing methods

type – Check the type of value


# Local Storage

Stores data with no expiration date


#Session Storage

Stores data for one session (data is lost when the tab is closed)


For more details about local storage and session storage, you can read article this article - 

# If you are using local storage
db.local.methodname


# If you are using session storage
db.session.methodname


# Local and Session storage method list

set(key, value) – Sets storage

get(key) - Get storage

has(key) - Checks specified key name and returns true or false

remove(key) -  Removes specified key name

clean() - Clean all keys from storage

parse(jsonstring) - Parse JSON string into a javascript object

string(object) - Convert Javascript Object  into JSON string

setJSON(key, object) – Sets object into key in JSON form

getJSON(key) – Get JSON object as a javascript object

trim(key) – Get trim value of storage

count() - Get total length of storage

key(index) – Get  specified index

keys() - Get all keys

setMore(object) – Sets js object into storage

removeMore(array) – Removes array of keys

getMore(array) – Get an array of values of keys

counter() - just for static counter

resetCounter() - reset the value of the counter

getVLStartWith(string, start, end) – Gets Array of value of the key, which contains the specified string

getOBStartWith(string, start, end) – Gets Object of key value, which contains specified string

entire() - Gets entire storage as js Object


# If you are using Cookie

db.cookie.methodname

# WebSQL method list

db.websql.initDB(name, version, description, size)  - initialize database

createTable(query) - websql query for creating table

insertRow(query, data, callback) -  websql query for inserting data on the table

getRows(query, callback) - websql query for getting rows of the table

deleteRows(query, info, callback) - websql query for deleting rows of the table

# Cookie method list

set(key, value, exdays) – Sets cookie value

get(key) – Get cookie value

has(key) - Checks specified key name and returns true or false

entire() - Gets entire cookie

# Type Method  

type(value) – Gets the type of value
