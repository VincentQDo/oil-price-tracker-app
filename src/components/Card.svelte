<script>
	export let title = '';
	export let subtitle = '';
</script>

<div
	class="rounded-2xl bg-gray-900 ring-1 ring-inset ring-gray-100/5 lg:flex lg:flex-col lg:justify-center"
>
	<div class="pt-5 pb-2 text-center">
		<h1 class="text-2xl pb-2 font-bold tracking-tight text-white">{title}</h1>
		<h2 class="text-xl font-bold tracking-tight text-white">{subtitle}</h2>
	</div>
	<slot name="content" />
	<slot name="footer" />
</div>
