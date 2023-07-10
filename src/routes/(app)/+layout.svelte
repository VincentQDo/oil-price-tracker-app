<script lang="ts">
	import Button from '../../components/Button.svelte';
	import Header from '../../components/Header.svelte';
</script>

<svelte:head>
	<title>Oil Price Tracker</title>
	<meta name="description" content="This is where the description goes for SEO" />
</svelte:head>

<Header title="Oil Tracker">
	<Button label="Login" href="/login" variant="primary" />
</Header>
<slot />
