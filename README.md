# [Introduction  Making an app](https://svelte.dev/tutorial/making-an-app)

This tutorial is designed to get you familiar with the process of writing components. But at some point, you'll want to start writing components in the comfort of your own text editor.

First, you'll need to integrate Svelte with a build tool. We recommend using [SvelteKit](https://kit.svelte.dev/), which sets up [Vite](https://vitejs.dev/) with [vite-plugin-svelte](https://github.com/sveltejs/vite-plugin-svelte/) for you...

```bash
npm create svelte@latest myapp
```

There are also a number of [community-maintained integrations](https://sveltesociety.dev/tools).

Don't worry if you're relatively new to web development and haven't used these tools before. We've prepared a simple step-by-step guide, [Svelte for new developers](https://svelte.dev/blog/svelte-for-new-developers), which walks you through the process.

You'll also want to configure your text editor. There are [plugins](https://sveltesociety.dev/tools#editor-support) for many popular editors as well as an official [VS Code extension](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).

Then, once you've got your project set up, using Svelte components is easy. The compiler turns each component into a regular JavaScript class — just import it and instantiate with `new`:

```js
import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    // we'll learn about props later
    answer: 42
  }
});
```

You can then interact with `app` using the [component API](https://svelte.dev/docs#run-time-client-side-component-api) if you need to.

