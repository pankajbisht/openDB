## What is opendb-store?

> A lightweight utility to manage browser storage (localStorage, sessionStorage, and cookies) with advanced features. Easily configure namespaces, key trimming, and data expiry.

## Core Database Object Method

local - Contain localStorage methods
session - Contain sessionStorage methods

## Installation Guide

> npm i opendb-store

## Import opendb-store in Your Project
```
import db from 'opendb-store'

db.local.set('libname', 'OpenDB Store');
console.log('Welcome to: ', db.local.get('libname'));
```

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

## Demonstrating LocalStorage and SessionStorage with an Example

```
<!DOCTYPE html>
<html lang="en">
<head>
   <title>opendb store</title>
</head>
<body>
  <script src="opendb.js"></script>
  <script>
	(function () {
	  db.local.set('name', 'opendb store');
	  console.log(db.local.get('name'));
	}());
  </script>
</body>
</html>
```

## Key Changes from the Old Approach

- Powerful Method: Enhanced functionality.
- ES6: Modern JavaScript features.
- Modular: Reusable and maintainable code.
- Namespacing: Organized and conflict-free.

For further details, see the [old-approach](https://github.com/pankajbisht/openDB/tree/v1-opendb) documentation.

## List of Local and Session Storage Methods

```
- set(key, value) :-  stores data in local or session storage with a key and value

- get(key, defaultValue) :- retrieve data from local or session storage by key.

- has(key) :- check whether a specified key exists in local or session storage

- remove(key) :- remove a specific item from local or session storage

- clear() :- Empty the entire storage.
```
