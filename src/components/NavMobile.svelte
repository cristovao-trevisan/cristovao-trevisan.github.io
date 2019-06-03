<script>
	import menuRoutes from '../menu-routes'
	import Toolbar from './ToolbarMobile.svelte'
	import Drawer from './Drawer.svelte'

	export let segment = ''

	let menuOpen = false
	const toggleMenu = () => { menuOpen = !menuOpen }
</script>

<Toolbar on:menu={toggleMenu} />

<Drawer open={menuOpen} on:close={toggleMenu}>
	<nav class="container">
		{#each menuRoutes as { path, icon, title } (path)}
			<a
				href={path} alt={title}
				class="item-container" class:selected={segment === path}
				on:click={toggleMenu}
			>
				<div class="item-icon"> <svelte:component this={icon} /> </div>
				<div class="item-title" href={path}> {title} </div>
			</a>
		{/each}
	</nav>
</Drawer>

<style lang="scss">
	@import '../style/colors.scss';

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

</style>