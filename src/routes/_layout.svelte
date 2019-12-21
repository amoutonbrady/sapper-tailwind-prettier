<script>
	import AppHeader from '../components/header.svelte';
	import AppFooter from '../components/footer.svelte';
</script>

<AppHeader />

<main class="container">
	<slot />
</main>

<AppFooter />
