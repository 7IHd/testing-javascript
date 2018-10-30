# 1.4 Support Async Tests with JavaScript Promises through async await

Our testing framework works great, however this is only the case for synchronous.

What if we had some asynchronous functions that we wanted to test?

We could make our callback functions `async`, and then use `await` to wait for that to resolve, then we can make our assertion on the `result` and the `expected`.

Note, we'll need to turn the `test` function into an `async` function so we can `await` the promise that is returned by the callback.

See example, [async-await.js](./async-await.js)
