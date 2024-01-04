--- 
sidebar_position: 2
--- 

# storage
---
This function is used to create custom storage files according to your needs, with this function you can easily determine the storage path with only the database id.

## Usage
```js
db.storage({paths});
```

## Parameters
| Param | Type | Desc | Required |
|---|---|---|---|
| paths | `object` | Where you set the storage path | `true` |

## Example(s)
This will create storage files on your storage folder
```js title="index.js"
db.storage({
	storageOne: "storageOne.json",
	storageTwo: "storageTwo.json"
})
```