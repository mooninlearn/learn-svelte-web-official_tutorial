# [Introduction  Dynamic attributes](https://svelte.dev/tutorial/dynamic-attributes)

You can use curly braces to control element attributes, just like you use them to control text.

Our image is missing a `src` attribute — let's add one:

```svelte
<img src={src}>
```

That's better. But Svelte is giving us a warning:

> A11y: <img> element should have an alt attribute

When building web apps, it's important to make sure that they're _accessible_ to the broadest possible userbase, including people with (for example) impaired vision or motion, or people without powerful hardware or good internet connections. Accessibility (shortened to a11y) isn't always easy to get right, but Svelte will help by warning you if you write inaccessible markup.

In this case, we're missing the `alt` attribute that describes the image for people using screenreaders, or people with slow or flaky internet connections that can't download the image. Let's add one:

```svelte
<img src={src} alt="A man dances.">
```

We can use curly braces _inside_ attributes. Try changing it to `"{name} dances."` — remember to declare a `name` variable in the `<script>` block.

## Shorthand attributes

It's not uncommon to have an attribute where the name and value are the same, like `src={src}`. Svelte gives us a convenient shorthand for these cases:

```svelte
<img {src} alt="A man dances.">
```

## NOTE

> image 파일 다운로드
> `/public/assets/image.gif` 로 저장

> `src/App.svelte`

```svelte
<script>
	let src = '/assets/image.gif';
	let name = 'Rick Astley';
</script>
```