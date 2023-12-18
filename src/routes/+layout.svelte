<script lang="ts">
	import '../app.css';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
	<title>Oil Price Tracker</title>
	<meta name="description" content="Heating oil tracker for local in the local Philadelphia area" />
</svelte:head>

<slot />
