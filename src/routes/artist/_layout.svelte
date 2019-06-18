<script>
	import { _ } from 'svelte-intl'
	import DimensionAware from '../../components/DimensionAware.svelte';
	import dimensions from '../../stores/dimensions.js'
	import NavMobile from '../../components/NavMobile.svelte'
	import routes from './_menu-routes'

	export let segment;
	const basepath = 'artist'
</script>

<svelte:head>
	<meta name="Description" content="{$_('metaDescription')}, {$_('artistPage.metaDescription')}">
</svelte:head>

<DimensionAware
	Default={NavMobile}
	Desktop={() => import('../../components/NavDesktop.svelte')}
	props={{ segment, routes, basepath }}
/>

<slot />
