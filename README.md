# [Special elements  sveltewindow](https://svelte.dev/tutorial/svelte-window)

Just as you can add event listeners to any DOM element, you can add event listeners to the `window` object with `<svelte:window>`.

On line 11, add the `keydown` listener:

```svelte
<svelte:window on:keydown={handleKeydown}/>
```

> As with DOM elements, you can add [event modifiers](https://svelte.dev/tutorial/event-modifiers) like `preventDefault`.