<script>
	import DimensionAware from '../components/DimensionAware.svelte';
	import dimensions from '../stores/dimensions.js'
	import NavMobile from '../components/NavMobile.svelte'

	export let segment;
</script>

<style>
	main {
		padding: 16px;
	}
</style>

<DimensionAware
	Default={NavMobile}
	Desktop={import('../components/NavDesktop.svelte')}
	props={{ segment }}
/>

<main>
	<slot></slot>
</main>
