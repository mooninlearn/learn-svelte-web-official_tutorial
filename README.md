# [Lifecycle  onMount](https://svelte.dev/tutorial/onmount)

Every component has a _lifecycle_ that starts when it is created, and ends when it is destroyed. There are a handful of functions that allow you to run code at key moments during that lifecycle.

The one you'll use most frequently is `onMount`, which runs after the component is first rendered to the DOM. We briefly encountered it [earlier](https://svelte.dev/tutorial/bind-this) when we needed to interact with a `<canvas>` element after it had been rendered.

We'll add an `onMount` handler that loads some data over the network:

```svelte
<script>
import { onMount } from 'svelte';

let photos = [];

onMount(async () => {
const res = await fetch(`/tutorial/api/album`);
photos = await res.json();
});
</script>
```

> It's recommended to put the `fetch` in `onMount` rather than at the top level of the `<script>` because of server-side rendering (SSR). With the exception of `onDestroy`, lifecycle functions don't run during SSR, which means we can avoid fetching data that should be loaded lazily once the component has been mounted in the DOM.

Lifecycle functions must be called while the component is initialising so that the callback is bound to the component instance — not (say) in a `setTimeout`.

If the `onMount` callback returns a function, that function will be called when the component is destroyed.


## NOTE

### BUG

```
Access to fetch at 'https://svelte.dev/tutorial/api/album' from origin 'http://localhost:5173' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
```

> App.svelte

```js
// ORIGINAL
const res = await fetch(`/tutorial/api/album`);

// BEFORE
const res = await fetch(`https://svelte.dev/tutorial/api/album`);

// AFTER
// * CORS PROXY SEVER 이용(C:\JnJ-soft\Developments\Servers\Rest\Node_REST\proxy  node server.js)
const data = {
  url: `https://svelte.dev/tutorial/api/album`
}
const res = await fetch(`http://localhost:3000/web`, {
  method: "POST", // *GET, POST, PUT, DELETE, etc.
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data), // body data type must match "Content-Type" header
});
```
