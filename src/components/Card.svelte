<script>
	export let title = '';
	export let subtitle = '';
</script>

<div
	class="rounded-2xl bg-gray-900 ring-1 ring-inset ring-gray-100/5 lg:flex lg:flex-col lg:justify-center"
>
	<div class="py-5 text-center">
		<h1 class="text-4xl pb-4 font-bold tracking-tight text-white">{title}</h1>
		<h2 class="text-3xl font-bold tracking-tight text-white">{subtitle}</h2>
	</div>
	<slot name="content" />
	<slot name="footer" />
</div>
