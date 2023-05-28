<script lang="ts">
	import type { OilPriceData } from './+page.server.js';

  export let data: {scanData: OilPriceData[]};
  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' } as Intl.DateTimeFormatOptions;
    return date.toLocaleDateString('en-us', options);
  }

  function groupByDate(data: OilPriceData[]) {
    const groupedData: {[key: string]: { date: string, prices: OilPriceData[] }} = {};
    data.forEach((item: OilPriceData) => {
      const date = formatDate(item.date);
      if (!groupedData[date]) {
        groupedData[date] = { date, prices: [] };
      }
      groupedData[date].prices.push(item);
    });
    return Object.values(groupedData);
  }
</script>

<div class="bg-gray-900 min-h-screen">
  <nav class="bg-gray-800 p-4">
    <h1 class="text-white text-2xl">Welcome to SvelteKit</h1>
    <p class="text-white">Visit <a href="https://kit.svelte.dev" class="text-blue-500">kit.svelte.dev</a> to read the documentation</p>
  </nav>

  <div class="container mx-auto py-8">
    <h2 class="text-white text-2xl mb-4">Oil Price Data</h2>

    {#each groupByDate(data.scanData) as { date, prices }}
      <div class="mb-4">
        <h3 class="text-white text-lg mb-2">Date: {date}</h3>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {#each prices as item}
            <div class="bg-gray-700 p-4 rounded-lg">
              <p class="text-white">Gallons: {item.gallons}</p>
              <p class="text-white">Price: {item.price}</p>
            </div>
          {/each}
        </div>
      </div>
    {/each}

    {#if !data || data.scanData.length === 0}
      <p class="text-white">No data available</p>
    {/if}
  </div>
</div>