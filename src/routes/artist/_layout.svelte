<script>
	import DimensionAware from '../../components/DimensionAware.svelte';
	import dimensions from '../../stores/dimensions.js'
	import NavMobile from '../../components/NavMobile.svelte'
	import routes from './_menu-routes'

	export let segment;
	const basepath = 'actor'
</script>

<DimensionAware
	Default={NavMobile}
	Desktop={() => import('../../components/NavDesktop.svelte')}
	props={{ segment, routes, basepath }}
/>

<slot />