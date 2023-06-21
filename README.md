# [Bindings  Textarea inputs](https://svelte.dev/tutorial/textarea-inputs)

The <textarea> element behaves similarly to a text input in Svelte — use bind:value to create a two-way binding between the <textarea> content and the value variable:

```svelte
<textarea bind:value={value}></textarea>
```

In cases like these, where the names match, we can also use a shorthand form:

```svelte
<textarea bind:value></textarea>
```

This applies to all bindings, not just textareas.

## NOTE

> Install `marked`

```bash
npm install marked
npm install @types/marked # For TypeScript projects
```