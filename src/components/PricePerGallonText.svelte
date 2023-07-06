<script lang="ts">
	import type { OilPriceData } from '../routes/(app)/+page.server';

	export let data: OilPriceData;
</script>

<div class="mx-auto max-w-xs px-8">
	<p class="mt-6 flex items-baseline justify-center gap-x-2">
		<span class="text-4xl font-bold tracking-tight text-white"
			>${data.price.toFixed(2)}/{data.gallons}</span
		>
		<span class="text-sm font-semibold leading-6 tracking-wide text-gray-400">USD/Gallons</span>
	</p>
</div>
