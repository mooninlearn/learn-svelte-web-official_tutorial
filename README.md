# [Introduction  Adding data](https://svelte.dev/tutorial/adding-data)

A component that just renders some static markup isn't very interesting. Let's add some data.

First, add a script tag to your component and declare a `name` variable:

```svelte
<script>
let name = 'world';
</script>

<h1>Hello world!</h1>
```

Then, we can refer to `name` in the markup:

```svelte
<h1>Hello {name}!</h1>
```

Inside the curly braces, we can put any JavaScript we want. Try changing `name` to `name.toUpperCase()` for a shoutier greeting.
