# OpenDB

## What is OpenDB?
> A lightweight utility to manage browser storage (localStorage, sessionStorage, and cookies) with advanced features. Easily configure namespaces, key trimming, and data expiry.

## Core Database Object Method
local - Contain localStorage methods
session - Contain sessionStorage methods

## Local Storage
> LocalStorage is a web storage that allows websites to store data persistently on a user's browser.
```
db.local.methodname
```

## Session Storage
> SessionStorage is a web storage that stores data for the duration of a page session and is cleared when the browser or tab is closed.
```
db.session.methodname
```

## Browser Support
Supports modern browsers including Chrome, Firefox, Safari, and Edge.

## Demonstrating the use of localStorage and sessionStorage with a simple example.
``````
<!DOCTYPE html>
<html lang="en">
<head>
   <title>OpenDB</title>
</head>
<body>
	<script src="opendb.js"></script>
	<script>
		(function () {
		    db.local.set('name', 'openDB');
			console.log(db.local.get('name'));
		}());
	</script>
	</body>
</html>
``````

## List of Local and Session Storage Methods
```
set(key, value) :-  stores data in local or session with a key and value
get(key) :- retrieve data from local or session by key.
has(key) :- check whether a specified key exists in local or session
```
