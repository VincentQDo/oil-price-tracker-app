<script lang="ts">
	import Button from './Button.svelte';
	export let title = '';
	export let navLinks: { id: string; url: string; label: string }[] = [];
	export let buttonLabel = '';
	export let buttonLink = '';
</script>

<nav class="flex items-center justify-between bg-indigo-800 text-white p-4">
	<div class="text-2xl">
		<a href="/">{title}</a>
	</div>
	<div class="justify-center flex items-center space-x-4">
		{#each navLinks as link (link.id)}
			<a href={link.url} class="text-white hover:underline">{link.label}</a>
		{/each}
	</div>
	<Button label={buttonLabel} href={buttonLink} variant="primary" />
</nav>
