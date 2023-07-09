<script>
	export let title = '';
	export let subtitle = '';
	export let buttonText = '';
	export let buttonLink = '#';
	export let cardContent = '';
</script>

<div
	class="rounded-2xl bg-gray-900 py-10 text-center ring-1 ring-inset ring-gray-100/5 lg:flex lg:flex-col lg:justify-center lg:py-10"
>
	<h1 class="text-5xl pb-4 font-bold tracking-tight text-white">{title}</h1>
	<h1 class="text-3xl font-bold tracking-tight text-white">{subtitle}</h1>
	<slot />
	<div class="mx-auto max-w-xs px-8 pb-8">
		<a
			href={buttonLink}
			target="_blank"
			class="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
		>
			{buttonText}
		</a>
	</div>
</div>
