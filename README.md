## What is opendb-store?

> A lightweight utility to manage browser storage (localStorage, sessionStorage, and cookies) with advanced features. Easily configure namespaces, key trimming, and data expiry.

## Core Database Object Method

local - Contain localStorage methods
session - Contain sessionStorage methods

## Installation Guide
```
npm i opendb-store
```

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

### set(key: string, value: any): void
Stores data in local or session storage with a key and value.
Example:
```javascript

db.local.set('libname', 'OpenDB Store'); // Set simple value
db.local.set('object', { name: 'OpenDB Store', version: 'x.y.z' }); // Set Object Value
db.local.set('array', ['OpenDB Store', 'x.y.z']); // Set Array Value
db.local.set('expire', 'It will expire', { expire: 1 * 1000 }); // Set simple value expire after 1 second

// for session storage
db.session.set('libname', 'OpenDB Store');
db.session.set('object', { name: 'OpenDB Store', version: 'x.y.z' });
db.session.set('array', ['OpenDB Store', 'x.y.z']);
db.session.set('expire', 'It will expire', { expire: 1 * 1000 });
```

### get(key: string, defaultValue: any): any
Retrieves data from local or session storage by key. Returns defaultValue if the key does not exist.

```javascript

// Get Simple Value
console.log('Welcome to: ', db.local.get('libname')); // OpenDB Store

// Get Object Value
console.log('Object: ', db.local.get('object'));
// Or
const { name, version } = db.local.get('object', ['name', 'version']);
console.log(name, version);

// Get Array Value
console.log('Array: ', db.local.get('array'));
```

### has(key: string): boolean
check whether a specified key exists in local or session storage

```javascript

// Check Simple Value
console.log('Welcome to: ', db.local.has('libname')); // true
console.log('Object: ', db.local.has('object')); // true
console.log('Array: ', db.local.get('array')); // true
console.log('Missing Key: ', db.local.has('missingkey')); // true
```

### remove(key: string): void
remove a specific item from local or session storage

```javascript

// Check Simple Value
console.log('Welcome to: ', db.local.remove('libname'));
console.log('Object: ', db.local.remove('object'));
console.log('Array: ', db.local.remove('array'));
```

### clear(): void
Empty the entire storage.

```javascript

// Clear all keys
console.log(db.local.clear()); // undefined
```
