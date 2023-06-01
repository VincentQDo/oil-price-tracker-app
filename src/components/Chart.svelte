<script lang="ts">
	import { Chart, type ChartItem, registerables } from 'chart.js';
	import { onMount } from 'svelte';
	import type { GroupOilData, OilPriceData } from '../routes/+page.server';

	export let data: GroupOilData[];

	onMount(() => {
		const datasets = createDataSet(data);

		Chart.register(...registerables);
		const labels = data[0].prices.map((e) => new Date(e.date).toLocaleDateString());
		new Chart(document.getElementById('line-chart') as ChartItem, {
			type: 'line',
			data: {
				labels: labels,
				datasets: datasets
			}
		});
	});

	const getRandomColor = () => {
		const r = Math.floor(Math.random() * 256);
		const g = Math.floor(Math.random() * 256);
		const b = Math.floor(Math.random() * 256);
		return `rgb(${r}, ${g}, ${b})`;
	};

	function createDataSet(inputData: GroupOilData[]) {
		const datasets: any = [];

		// Group data by gallons.
		const dataByGallons: { [key: number]: OilPriceData[] } = {};
		inputData.forEach((groupData) => {
			groupData.prices.forEach((priceData) => {
				if (!dataByGallons[priceData.gallons]) {
					dataByGallons[priceData.gallons] = [];
				}
				dataByGallons[priceData.gallons].push(priceData);
			});
		});

		// Create a dataset for each gallon amount.
		Object.entries(dataByGallons).forEach(([gallons, prices]) => {
			// Sort and extract price data.
			prices.sort((a, b) => a.date.getTime() - b.date.getTime());
			const data = prices.map((price) => price.price);

			const dataset = {
				label: `${gallons} Gallon(s)`,
				data: data,
				borderColor: getRandomColor(),
				fill: false,
				tension: 0.5
			};

			datasets.push(dataset);
		});

		console.log('dataset here: ', datasets);
		return datasets;
	}
</script>

<div style="width: 400px;"><canvas id="line-chart" /></div>
