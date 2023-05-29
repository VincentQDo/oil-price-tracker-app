<script lang="ts">
	import Chart from '../components/Chart.svelte';
	import PriceCard from '../components/PriceCard.svelte';

	export let data;
</script>

<div class="bg-gray-900 min-h-screen">
	<nav class="bg-gray-800 p-4">
		<h1 class="text-white text-2xl">Welcome to SvelteKit</h1>
	</nav>

	<div class="container mx-auto py-8">
		<h2 class="text-white text-2xl mb-4">Oil Price Data</h2>
		{#if data && data.oilData.length > 0}
			<PriceCard data={data.oilData} />
			<Chart data={data.oilData} />
		{:else}
			<p class="text-white">No data available</p>
		{/if}
	</div>
</div>
