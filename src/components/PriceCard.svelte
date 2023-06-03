<script lang="ts">
	import type { GroupedDataItem, OilPriceData } from '../routes/+page.server';
	import Chart from './Chart.svelte';
	import PricePerGallonText from './PricePerGallonText.svelte';

	export let data: GroupedDataItem;
	const sortedData = [...data.data.sort((a, b) => +b.date - +a.date)];
	const supplierUrl = sortedData[0].supplier_url;
	const latestDate = sortedData[0].date;
	const latestData = sortedData.filter((d) => d.date.toUTCString() === latestDate.toUTCString());
</script>

<div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
	<div
		class="rounded-2xl bg-gray-900 py-10 text-center ring-1 ring-inset ring-gray-100/5 lg:flex lg:flex-col lg:justify-center lg:py-10"
	>
		<h1 class="text-5xl pb-4 font-bold tracking-tight text-white">
			{data.supplier}
		</h1>
		<h1 class="text-3xl font-bold tracking-tight text-white">
			{latestDate.toLocaleDateString()}
		</h1>
		{#each latestData as priceData}
			<PricePerGallonText data={priceData} />
		{/each}
		<div class="mx-auto max-w-xs px-8 pb-8">
			<a
				href={supplierUrl}
				target="_blank"
				class="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>Go To Supplier</a
			>
		</div>
		<div class="pl-6">
			<!-- <Chart {data} /> -->
		</div>
	</div>
</div>
