--- 
sidebar_position: 4
--- 

# setKey
This function is used to change the key of a json object in storage specifically

## Usage
```js
db.storage(key, newKey, table?, dbName?);
```

## Parameters
| Param | Type | Desc | Required |
|---|---|---|---|
| key | `string` | the old key to be replaced | `true` |
| newKey | `string` | A new key will replace it | `true` |
| table | `string` | Param to access nested object, you can fill it using `null` to skip this param | `false` |
| dbName | `string` | Database path id paramater | `false` |

## Example(s)
This will change your data key
```js title="index.js"
// set new key for "level" from "default" storage
db.setKey("level", "rank");

// set new key for "money" from "storageOne" storage
db.setKey("money", "dollar", null, "storageOne");
```