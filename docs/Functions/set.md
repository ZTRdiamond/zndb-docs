--- 
sidebar_position: 5
--- 

# set
---
This function is used to store and also update data in storage

## Usage
```js
db.set(name, value, table, dbName);
```

## Parameters
| Param | Type | Desc | Required |
|---|---|---|---|
| paths | `object` | Where you set the storage path | `true` |

## Example(s)
This will save data
```js title="index.js"
// save "userId" with value "12345678"
db.set("userId", "12345678");

// save new value at "money" data
db.set("money", 12000, null, "storageOne");
```