# [Bindings  This](https://svelte.dev/tutorial/bind-this)

The readonly `this` binding applies to every element (and component) and allows you to obtain a reference to rendered elements. For example, we can get a reference to a `<canvas>` element:

```svelte
<canvas
  bind:this={canvas}
  width={32}
  height={32}
></canvas>
```

Note that the value of `canvas` will be `undefined` until the component has mounted, so we put the logic inside the `onMount` [lifecycle function](https://svelte.dev/tutorial/onmount).

## NOTE

> App.svelte 변경

```svelte
<!-- BEFORE -->
<style>
	canvas {
		-webkit-mask: url(/svelte-logo-mask.svg) 50% 50% no-repeat;
		mask: url(/svelte-logo-mask.svg) 50% 50% no-repeat;
	}
</style>

<!-- AFTER -->
<style>
	canvas {
		-webkit-mask: url(https://svelte.dev/svelte-logo-mask.svg) 50% 50% no-repeat;
		mask: url(https://svelte.dev/svelte-logo-mask.svg) 50% 50% no-repeat;
	}
</style>
```