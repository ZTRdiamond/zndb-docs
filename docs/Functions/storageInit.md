--- 
sidebar_position: 1 
--- 

# storageInit
---
This function is used to initialize the folder and json file used to store data.

## Usage
```js
db.storageInit({options});
```

## Parameters
| Param | Type | Desc | Required |
|---|---|---|---|
| options | `object` | Where you set the storage directory | `true` |

## Example(s)
This will create storage directory.
```js
const db = require("zanixon.db");
db.storageInit({
	dir: "./database/main"
});
```

## Default storage file 
This default storage file is used as the main data storage if you do not fill in the `dbName` parameter.
```bash title="default: db.json"
./database/main/db.json
```
```bash title="cooldown: cooldown.json"
./database/main/cooldown.json
```
```bash title="emoji: emoji.json"
./database/main/emoji.json
``` 
:::info
You can't delete or disable the system that created the 3 files above
because they are useful for some functions in the module, so if you want to use files that you created yourself... you can use your files and just ignore the default files.
:::