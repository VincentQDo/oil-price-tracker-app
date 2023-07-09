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

	let chartConfig: ChartConfiguration = {
		type: 'line',
		data: {
			labels: sortedData
				.reverse()
				.filter((_, index) => index % Math.floor(sortedData.length / 5) === 0)
				.map((data) => data.date.toLocaleDateString()),
			datasets: latestData.map((data, index) => ({
				label: `${data.gallons} Gallon(s)`,
				data: sortedData.filter((d) => d.gallons === data.gallons).map((d) => d.price),
				borderColor: colors[index % colors.length],
				fill: false
			}))
		}
	};
</script>

<Card
	title={data.supplier}
	subtitle={latestDate.toLocaleDateString()}
	buttonText="Go To Supplier"
	buttonLink={supplierUrl}
>
	{#each latestData as priceData}
		<PricePerGallonText data={priceData} />
	{/each}
	<div class="pl-6">
		<Chart config={chartConfig} />
	</div>
</Card>
