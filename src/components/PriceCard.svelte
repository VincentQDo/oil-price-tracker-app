<script lang="ts">
	import type { GroupedDataItem } from '../interfaces/OilPrices';
	import Chart from './Chart.svelte';
	import Card from './Card.svelte';
	import PricePerGallonText from './PricePerGallonText.svelte';
	import type { ChartConfiguration } from 'chart.js';

	export let data: GroupedDataItem;

	const sortedData = [...data.data.sort((a, b) => +b.date - +a.date)];
	const supplierUrl = sortedData[0].supplier_url;
	const latestDate = sortedData[0].date;
	const latestData = sortedData.filter(
		(d) => d.date.toISOString().slice(0, 10) === latestDate.toISOString().slice(0, 10)
	);

	const colors = [
		'rgb(255, 99, 132)',
		'rgb(54, 162, 235)',
		'rgb(255, 206, 86)',
		'rgb(75, 192, 192)',
		'rgb(153, 102, 255)',
		'rgb(255, 159, 64)'
	];

	let cardContent = {
		buttonText: 'Go To Supplier',
		buttonLink: supplierUrl
	};
	const chartLabels = sortedData
		.reverse()
		.filter((_, index) => index % Math.floor(sortedData.length / 5) === 0)
		.map((data) => data.date.toLocaleDateString());

	if (!chartLabels.includes(sortedData[0].date.toLocaleDateString())) {
		chartLabels.push(sortedData[0].date.toLocaleDateString());
	}
	const chartDataSets = latestData.map((data, index) => {
		const lineData = sortedData.filter((d) => d.gallons === data.gallons).map((d) => d.price);
		if (lineData.length < chartLabels.length) {
			lineData.push(sortedData[0].price);
		}
		return {
			label: `${data.gallons} Gallons(s)`,
			data: lineData,
			borderColor: colors[index % colors.length],
			fill: false
		};
	});
	let chartConfig: ChartConfiguration = {
		type: 'line',
		data: {
			labels: chartLabels,
			datasets: chartDataSets
		}
	};
</script>

<Card title={data.supplier} subtitle={latestDate.toLocaleDateString()}>
	<div slot="content" class="px-6">
		{#each latestData as priceData}
			<PricePerGallonText data={priceData} />
		{/each}
		<div class="pt-4 pb-4">
			<Chart config={chartConfig} />
		</div>
	</div>
	<div slot="footer" class="mx-auto max-w-xs px-8 pt-2 pb-8 text-center">
		<a
			href={cardContent.buttonLink}
			target="_blank"
			class="block w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
		>
			{cardContent.buttonText}
		</a>
	</div>
</Card>
