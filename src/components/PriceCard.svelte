<script lang="ts">
	import type { GroupOilData } from '../routes/+page.server';
	import PricePerGallonText from './PricePerGallonText.svelte';

	export let data: GroupOilData;
	let pricePer150Gal = data.prices[1];
	let pricePer100Gal = data.prices[0];
</script>

<div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
	<div
		class="rounded-2xl bg-gray-900 py-10 text-center ring-1 ring-inset ring-gray-100/5 lg:flex lg:flex-col lg:justify-center lg:py-16"
	>
		<h1 class="text-3xl font-bold tracking-tight text-white">
			{data.prices[0].date.toLocaleDateString()}
		</h1>
		<PricePerGallonText data={pricePer100Gal} />
		<PricePerGallonText data={pricePer150Gal} />
		<div class="mx-auto max-w-xs px-8">
			<a
				href="/"
				class="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>Go To Supplier</a
			>
		</div>
	</div>
</div>
