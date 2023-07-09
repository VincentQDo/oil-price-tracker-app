<script lang="ts">
	export let variant: 'primary' | 'secondary' = 'primary'; // "primary" or "secondary"
	export let label: string = ''; // Button text
	export let href: string = '#'; // Button link
</script>

<a
	href={href}
	class="px-4 py-2 rounded-md transition-colors duration-200 ease-in-out {variant === 'primary'
		? 'bg-indigo-600 text-white hover:bg-indigo-700'
		: 'bg-gray-800 text-white hover:bg-gray-700'}"
>
	{label}
</a>
