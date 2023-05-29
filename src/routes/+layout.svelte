<script>
	import '../app.css';
	import {
		colorScheme,
		SvelteUIProvider,
		AppShell,
		Navbar,
		Header,
		Switch,
		Title,
		Group,
		Center
	} from '@svelteuidev/core';

	let opened = false;

	function toggleTheme() {
		colorScheme.update((v) => (v === 'dark' ? 'light' : 'dark'));
	}
	function toggleOpened() {
		opened = !opened;
	}
</script>

<SvelteUIProvider withGlobalStyles themeObserver={$colorScheme}>
	<AppShell>
		<Header height="50px" slot="header">
			<Group position="apart">
				<Title order={1} class="align-middle">Oil Tracker</Title>
				<Switch size="md" class="align-middle" on:change={toggleTheme} />
			</Group>
		</Header>
		<Navbar slot="navbar" hidden={!opened}>test nav</Navbar>

		<slot>This is the main content</slot>
	</AppShell>
</SvelteUIProvider>
