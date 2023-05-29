<script lang="ts">
	import { Chart, type ChartItem, registerables } from 'chart.js';
	import { onMount } from 'svelte';
	import type { GroupOilData } from '../routes/+page.server';

	export let inputData: GroupOilData[];

	onMount(() => {
		const datasets = createDataSet(inputData);

		Chart.register(...registerables);
		new Chart(document.getElementById('line-chart') as ChartItem, {
			type: 'line',
			data: {
				labels: ['test1', 'test2'],
				datasets: datasets
			}
		});
	});

	function createDataSet(inputData: GroupOilData[]) {
		const datasets: any = [];

		inputData.forEach((data, index) => {
			const dataset = {
				label: `${data.gallon} Gallon(s)`,
				data: data.prices.map((priceData) => ({
					x: new Date(priceData.date),
					y: priceData.price
				})),
				borderColor: 'rgb(75, 192, 192)',
				fill: false,
				tension: 0.1
			};

			datasets.push(dataset);
		});

		console.log('dataset here: ', datasets);
		return datasets;
	}
</script>

<div style="width: 800px;"><canvas id="line-chart" /></div>
