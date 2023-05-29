<script lang="ts">
	import type { GroupOilData } from '../routes/+page.server';

	export let data: GroupOilData[];
</script>

{#each data as { gallon, prices }}
	<div class="mb-4">
		<h3 class="text-white text-lg mb-2">Gallon: {gallon}</h3>

		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
			<div class="bg-gray-700 p-4 rounded-lg">
				<p class="text-white">Date: {prices[prices.length - 1].date}</p>
				<p class="text-white">Price: ${prices[prices.length - 1].price.toFixed(2)}</p>
			</div>
		</div>
	</div>
{/each}
