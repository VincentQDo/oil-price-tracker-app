<script lang="ts">
	import type { OilPriceData } from '../interfaces/OilPrices';

	export let data: OilPriceData;
	export let supplier: string = '';
</script>

<div class="mx-auto max-w-xs px-8">
	<p class="mt-2 flex items-baseline justify-center">
		{#if supplier}
			<span class="text-l font-bold tracking-tight text-white">{supplier}:</span>
		{/if}
		<span class="text-xl font-bold tracking-tight text-white">${data.price.toFixed(2)}</span>
		<span class="text-sm font-semibold tracking-wide text-gray-400">/Gallons</span>
	</p>
</div>
