<script lang="ts">
	import Chart from '../components/Chart.svelte';

  export let data;
</script>

<div class="bg-gray-900 min-h-screen">
  <nav class="bg-gray-800 p-4">
    <h1 class="text-white text-2xl">Welcome to SvelteKit</h1>
    <p class="text-white">Visit <a href="https://kit.svelte.dev" class="text-blue-500">kit.svelte.dev</a> to read the documentation</p>
  </nav>

  <div class="container mx-auto py-8">
    <h2 class="text-white text-2xl mb-4">Oil Price Data</h2>

    {#each data.oilData as { gallon, prices }}
      <div class="mb-4">
        <h3 class="text-white text-lg mb-2">Gallon: {gallon}</h3>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {#each prices as item}
            <div class="bg-gray-700 p-4 rounded-lg">
              <p class="text-white">Date: {item.date}</p>
              <p class="text-white">Price: ${item.price.toFixed(2)}</p>
            </div>
          {/each}
        </div>
      </div>
    {/each}

    {#if !data || data.oilData.length === 0}
      <p class="text-white">No data available</p>
    {/if}
  </div>
  <Chart inputData={data.oilData}/>
</div>