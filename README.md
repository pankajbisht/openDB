# What is OpenDB ?
OpenDB is utility to manage local, session, cookie in browser.

# Browser Support
The numbers in the table specify the first browser version that fully supports Local Storage.

Chrome – 4.0

Ie – 8.0

Mozila firefox – 3.5

Safari – 4.0

Opera – 11.5

#Use of local and session storage with simple example

    <!DOCTYPE html>

    <html lang="en">

    <head><title>OpenDB</title></head>

    <body>

	<script src="opendb.js"></script>

  	<script>

    		(function () {

      			// Working is a methode to find your browser support localstorage or session storage if supported then you will get true and otherwise false

			console.log(db.working());  // true means you can work on it
    		}());
    		
  	</script>
  	
    </body>

    </html>
 

# Main db object method

working() - checks local storage and session storage working on your system

#Main db object objects

local  -  Contain localStorage methods

session  -  Contain seesionStorage methods

cookie - Contain cookie methods

test  -  Contain testing methods 

type – Chech type of value


#Local Storage

Stores data with no expiration date


#Session Storage

Stores data for one session (data is lost when the tab is closed)


# If you are using local storage
db.local.methodname


# If you are using session storage
db.session.methodname 


# Local and Session storage method list

set(key, value) – Sets storage

get(key) - Get storage

has(key) - Checks specified key name and return true or false

remove(key) -  Removes specified key name

clean() - Clean all keys from storage

parse(jsonstring) - Parse Json string into javascript object

string(object) - Convert Javascript Object  into Json string   

setJSON(key, object) – Sets object into key in Json form

getJSON(key) – Get json object as javascript object

trim(key) – Get trim value of storage

count() - Get totle length of storage

key(index) – Get  specified index

keys() - Get all keys

setMore(object) – Sets js object into storage

removeMore(array) – Removes array of keys

getMore(array) – Get array of values of keys

counter() - just for static counter 

resetCounter() - reset the value of counter

getVLStartWith(string, start, end) – Gets Array of value of key, which contain specified string

getOBStartWith(string, start, end) – Gets Object of key value, which contain specified string

entire() - Gets entire storage as js Object


# If you are using Cookie

db.cookie.methodname 

# WebSQL method list

db.websql.initDB(name, version, description, size)  - initialize database

createTable(query) - websql query for crating table
 
insertRow(query, data, callback) -  websql query for inserting data on table

getRows(query, callback) - websql query for get rows of table

deleteRows(query, info, callback) - websql query for delete rows of table

# Cookie method list

set(key, value, exdays) – Sets cookie value

get(key) – Get cookie value

has(key) - Checks specified key name and return true or false

entire() - Gets entire cookie

# Type Method  

type(value) – Gets type of value 
