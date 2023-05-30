<script lang="ts">
	import type { GroupOilData } from '../routes/+page.server';

	export let data: GroupOilData;
	export let cardFooter: string = '';
	let latestPrices = data.prices[data.prices.length - 1];
</script>

<div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
	<div
		class="rounded-2xl bg-gray-900 py-10 text-center ring-1 ring-inset ring-gray-100/5 lg:flex lg:flex-col lg:justify-center lg:py-16"
	>
		<div class="mx-auto max-w-xs px-8">
			<h1 class="text-2xl font-bold tracking-tight text-white">
				{latestPrices.date.toLocaleDateString()}
			</h1>
			<p class="text-base font-semibold text-gray-400">{data.gallon}</p>
			<p class="mt-6 flex items-baseline justify-center gap-x-2">
				<span class="text-5xl font-bold tracking-tight text-white"
					>${latestPrices.price.toFixed(2)}</span
				>
				<span class="text-sm font-semibold leading-6 tracking-wide text-gray-400">USD</span>
			</p>

			<p class="mt-6 text-xs leading-5 text-gray-400">
				{cardFooter}
			</p>
		</div>
		<div class="mx-auto max-w-xs px-8">
			<p class="text-base font-semibold text-gray-400">{latestPrices.date.toLocaleDateString()}</p>
			<p class="mt-6 flex items-baseline justify-center gap-x-2">
				<span class="text-5xl font-bold tracking-tight text-white"
					>${latestPrices.price.toFixed(2)}</span
				>
				<span class="text-sm font-semibold leading-6 tracking-wide text-gray-400">USD</span>
			</p>
			<a
				href="/"
				class="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>Go To Supplier</a
			>
			<p class="mt-6 text-xs leading-5 text-gray-400">
				{cardFooter}
			</p>
		</div>
	</div>
</div>
