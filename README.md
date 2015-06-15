# OpenDB is utility to manage local data base or session storage 

# Use of local and session storage with simple example 

<!DOCTYPE html>

    <html lang="en">

    <head>
    </head>

    <body>

      <script src="opendb.js"></script>

      <script>

        (function () {

          //Working is a methode to find your browser support localstorage or session storage if supported then you will get true and otherwise false
    
          console.log(db.working());  // true means you can work on it

        }());
      </script>
    </body>
    </html>




# Main db object method
working --> check local storage and session storage working on your system


# Main db object objects

local --> Contain localStorage methods

session --> Contain seesionStorage methods

test --> Contain testing methods  



How to Use This Js
===================

# If you are using local storage

db.local.methodname

# If you are using session storage

db.session.methodname 


Local and Session storage method list
====================================

set --> set storage

get --> get storage

count --> total length of store

string --> convert object to string

parse --> convert object string to object

has --> check storage contain current key

remove --> remove current key

trim --> trim string

setJSON --> set object to json format

getJSON --> get string object as a js object

counter --> static counter

resetCounter --> reset counter

keys --> get all keys

key --> get current key

flush --> clear entire db

setMore --> set object value in storage

getMore --> get array values

removeMore --> remove array value from storage 

getVLStartWith --> get keys values start with some basic pattern (like name1, name2)

getOBStartWith --> get objects start with some basic pattern (like name1, name2)
