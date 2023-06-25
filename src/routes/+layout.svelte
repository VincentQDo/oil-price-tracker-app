<script lang="ts">
	import '../app.css';
	import Header from '../components/Header.svelte';
</script>

<svelte:head>
	<title>Oil Price Tracker</title>
	<meta name="description" content="This is where the description goes for SEO" />
</svelte:head>

<Header />
<slot />
