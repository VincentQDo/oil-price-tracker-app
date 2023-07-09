<script lang="ts">
	import { Chart, registerables } from 'chart.js';
	import type { ChartConfiguration } from 'chart.js';
	import { onMount } from 'svelte';

	export let config: ChartConfiguration;

	let chartElement: HTMLCanvasElement;

	onMount(() => {
		Chart.register(...registerables);
		new Chart(chartElement, config);
	});
</script>

<div style="width: 100%;"><canvas bind:this={chartElement} /></div>
