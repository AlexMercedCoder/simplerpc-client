# SimpleRPC - Client

`npm install simplerpc-client`

The SimpleRPC framework is a framework for creating very simple lightweight RPC APIs for use with any backend or frontend framework with a `redux/useReducer` like API.

Actions take the signature of

`(payload: Object, context: Object) => response:Any`

The client function then can be called like so:

`rpcDispatch({type: "actionName", payload: {arg1: 1, arg 2: "hello"}})`

## Setting up the Client

```js
import {createClient} from "simplerpc-client"

const rpcDispatch = createClient({
    url: "http://localhost:4000/rpc",
    headers: {
        "authorization": "..."
    }
})

default export rpcDispatch
```

Then assuming your server is setup with `simplerpc-server` at the specific endpoint you can make rpc calls like so.

```js
await rpcDispatch({type: "createTodo", payload: {
    message: "Lunch"
}})
```