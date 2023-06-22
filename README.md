# [Special elements  sveltebody](https://svelte.dev/tutorial/svelte-body)

Similar to `<svelte:window>` and `<svelte:document>`, the `<svelte:body>` element allows you to listen for events that fire on `document.body`. This is useful with the `mouseenter` and `mouseleave` events, which don't fire on `window`.

Add the `mouseenter` and `mouseleave` handlers to the `<svelte:body>` tag:

```svelte
<svelte:body
  on:mouseenter={handleMouseenter}
  on:mouseleave={handleMouseleave}
/>
```