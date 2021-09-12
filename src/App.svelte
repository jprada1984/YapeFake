<script>
	import Router, {location, link} from 'svelte-spa-router';
	import Login from './Login.svelte';
	import Principal from './Principal.svelte';

	const routes = {
		'/': Login,
   		'/Principal/': Principal,
    	'*': Login
	};


</script>

<main>
	<Router {routes}/>
</main>

<style>
	main {
		text-align: center;
		padding: 0;
		margin: 0;
	}
</style>