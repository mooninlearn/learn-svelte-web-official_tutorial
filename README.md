# [Component composition  Slots](https://svelte.dev/tutorial/slots)

Just like elements can have children...

```
<div>
<p>I'm a child of the div</p>
</div>
```

...so can components. Before a component can accept children, though, it needs to know where to put them. We do this with the `<slot>` element. Put this inside `Box.svelte`:

```
<div class="box">
<slot></slot>
</div>
```

You can now put things in the box:

```
<Box>
<h2>Hello!</h2>
<p>This is a box. It can contain anything.</p>
</Box>
```
