<script>
	export let variant = 'primary'; // "primary" or "secondary"
	export let label = ''; // Button text
</script>

<button
	class="px-4 py-2 rounded-md transition-colors duration-200 ease-in-out {variant === 'primary'
		? 'bg-indigo-600 text-white hover:bg-indigo-700'
		: 'bg-gray-800 text-white hover:bg-gray-700'}"
>
	{label}
</button>
