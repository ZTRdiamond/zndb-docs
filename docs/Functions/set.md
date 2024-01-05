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
| name | `string` | data key to access or obtain the data to be stored. | `true` |
| value | `string` | param to place the value to be stored | `true` |
| table | `string` | Param to access nested object, you can fill it using `null` to skip this param | `false` |
| dbName | `string` | Database path id paramater | `false` |

## Example(s)
This will save data
```js title="index.js"
// save "userId" with value "12345678"
db.set("userId", "12345678");

// save new value at "money" data
db.set("money", 12000, null, "storageOne");
```