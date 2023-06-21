# [Logic  Else-if blocks](https://svelte.dev/tutorial/else-if-blocks)

Multiple conditions can be 'chained' together with else if:

```svelte
{#if x > 10}
	<p>{x} is greater than 10</p>
{:else if 5 > x}
	<p>{x} is less than 5</p>
{:else}
	<p>{x} is between 5 and 10</p>
{/if}
```

> A `#` character always indicates a _block opening_ tag. A `/` character always indicates a _block closing_ tag. A `:` character, as in `{:else}`, indicates a _block continuation_ tag. Don't worry — you've already learned almost all the syntax Svelte adds to HTML.