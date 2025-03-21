# chatwork-api

This package just wraps the chatwork API.

## Requirements

- Node.js v20 or later

## Usage

### Install

With npm:

```
npm install chatwork-api-wrap
```

With yarn:

```
yarn add chatwork-api-wrap
```

### SourceCode

```js
// CommonJS
const chatwork = require('chatwork-api-wrap');

// ES Modules
// import * as chatwork from 'chatwork-api-wrap';

// Using async/await
async function getChatworkInfo() {
  try {
    const info = await chatwork.me.get('YourChatworkToken');
    console.log(info);
  } catch (error) {
    console.error(error);
  }
}

// Using Promise chain
chatwork.me.get('YourChatworkToken')
    .then((body) => console.log(body))
    .catch((error) => console.error(error));
```

## Properties

| property         | description                              |
| :--------------- | :--------------------------------------- |
| me               | Your own account information.            |
| my               | Your own relation data.                  |
| contacts         | Your own contact data.                   |
| rooms            | Chat room operation.                     |
| incomingRequests | Contact approval request data operation. |

## Reference

[chatwork API Document](http://developer.chatwork.com/ja/endpoints.html)
