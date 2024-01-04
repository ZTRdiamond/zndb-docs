--- 
sidebar_position: 3
--- 

# variables
---
This function is used to create a temp data so that when executing the `getVar()` function does not get a `null` or `undefined` result.

## Usage
```js
db.variables({data}, dbName);
```

## Parameters
| Param | Type | Desc | Required |
|---|---|---|---|
| data | `object` | Setup your vaeiables here | `true` |
| dbName | `string` | Your database path id | `false` |

## Example(s)
This will create variables on your storage file
```js title="index.js"
// save the variables to default storage
db.variables({
	money: 0,
	exp: 0,
	reqExp: 150,
	level: 1
})

// save the variables to storageOne storage
db.variables({
	money: 0,
	exp: 0,
	reqExp: 150,
	level: 1
}, "storageOne")
```
