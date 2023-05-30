<script lang="ts">
	import Chart from '../components/Chart.svelte';
	import PriceCard from '../components/PriceCard.svelte';

	export let data;
</script>

<PriceCard data={data.oilData[0]} />
