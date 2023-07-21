<script lang="ts">
	import '../app.css';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
	<title>Oil Price Tracker</title>
	<meta name="description" content="This is where the description goes for SEO" />
</svelte:head>

<slot />
