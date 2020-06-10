<script>
	import AppHeader from '../components/header.svelte';
	import AppFooter from '../components/footer.svelte';
</script>

<div class="h-screen flex flex-col bg-gray-800 text-gray-100">
	<AppHeader />

	<main class="flex flex-1 justify-center items-center flex-col space-y-4">
		<slot />
	</main>

	<AppFooter />
</div>
