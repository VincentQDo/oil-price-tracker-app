<script lang="ts">
	import type { GroupedDataItem } from '../interfaces/OilPrices';
	import Card from './Card.svelte';
	import PricePerGallonText from './PricePerGallonText.svelte';

	export let data: GroupedDataItem[];

	data.forEach((e) => e.data.sort((a, b) => +b.date - +a.date));
	let latestData = data.map((e) => ({ supplier: e.supplier, latestData: e.data[0] }));

	latestData.sort((a, b) => a.latestData.price - b.latestData.price);

	let latestDate: string;
	data.forEach((element) => {
		element.data.sort((a, b) =>
			a.date.toISOString().slice(0, 10) > b.date.toISOString().slice(0, 10) ? -1 : 1
		);
		latestDate = element.data[0].date.toLocaleDateString();
	});
</script>

<Card title={'Oil Prices'} subtitle={latestDate}>
	<div slot="content" class="px-6">
		{#each latestData as supplierData}
			<PricePerGallonText data={supplierData.latestData} supplier={supplierData.supplier} />
		{/each}
	</div>
</Card>
