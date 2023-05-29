<script lang="ts">
	import { Chart, type ChartItem, registerables } from 'chart.js';
	import { onMount } from 'svelte';
	import type { GroupOilData } from '../routes/+page.server';

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

		inputData.forEach((data, index) => {
			const dataset = {
				label: `${data.gallon} Gallon(s)`,
				data: data.prices.map((priceData) => priceData.price),
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
