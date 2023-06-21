# [Reactivity  Statements](https://svelte.dev/tutorial/reactive-statements)

We're not limited to declaring reactive _values_ — we can also run arbitrary _statements_ reactively. For example, we can log the value of `count` whenever it changes:

```svelte
$: console.log('the count is ' + count);
```

You can easily group statements together with a block:

```svelte
$: {
console.log('the count is ' + count);
alert('I SAID THE COUNT IS ' + count);
}
```

You can even put the `$:` in front of things like `if` blocks:

```svelte
$: if (count >= 10) {
alert('count is dangerously high!');
count = 9;
}
```