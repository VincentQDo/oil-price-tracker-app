<script lang="ts">
	import PriceCard from '../components/PriceCard.svelte';
	import type { GroupedDataItem } from './+page.server';

	export let data: { oilData: GroupedDataItem[] };
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
	{#each data.oilData as supplierData}
		<div>
			<PriceCard data={supplierData} />
		</div>
	{/each}
</div>
