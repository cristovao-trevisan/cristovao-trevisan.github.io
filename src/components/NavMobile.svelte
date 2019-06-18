<script>
	import { _ } from 'svelte-intl'
	import Toolbar from './ToolbarMobile.svelte'
	import Drawer from './Drawer.svelte'
	import LanguageSelector from './LanguageSelector.svelte'

	export let segment = ''
	export let routes = []
	export let basepath = ''

	$: parsedSegment = segment === '/' ? '' : (segment || '')
	$: currentRoute = routes.find(route => route.path === parsedSegment)

	let menuOpen = false
	const toggleMenu = () => { menuOpen = !menuOpen }
</script>

<Toolbar on:menu={toggleMenu}>
	<div class="page-title">
		{$_(currentRoute.title)}
	</div>
</Toolbar>

<Drawer open={menuOpen} on:close={toggleMenu}>
	<nav class="container noise">
		{#each routes as { path, icon, title } (path)}
			<a
				rel=prefetch
				href={`${basepath}/${path}`}
				class="item-container" class:selected={path === parsedSegment}
				on:click={toggleMenu}
			>
				<div class="item-icon"> <svelte:component this={icon} /> </div>
				<div class="item-title" href={path}> {$_(title)} </div>
			</a>
		{/each}
	</nav>
	<div class="language-container">
		<LanguageSelector />
	</div>
</Drawer>

<style lang="scss">
	@import '../style/colors.scss';

	.page-title {
		font-family: 'Street Slab';
		position: absolute;
		width: 100%;
		text-align: center;
		font-size: 28px;
	}
	.container {
		margin-top: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	.item-container {
		position: relative;
		display: flex;
		justify-content: center;
		width: fit-content;
		padding: 8px;
		color: nth($blue, 1);
		text-decoration: none;

		&.selected {
			color: nth($gray, 1);
			cursor: default;
		}
	}

	.item-icon {
		height: fit-content;
		:global(svg) {
			height: 18px;
		}
	}
	.item-title {
	}

	.language-container {
		position: absolute;
		bottom: 10px;
		display: flex;
		justify-content: center;
		width: 100%;
	}
</style>