<script>
	import menuRoutes from '../menu-routes'

	export let segment
	$: currentPath = `/${segment || ''}`
</script>

<nav class="container">
	{#each menuRoutes as { path, icon, title }}
		<div class="item-container" class:selected={currentPath === path}>
		  <a class="item-title" href={path}> {title} </a>
		</div>
	{/each}
</nav>

<style lang="scss">
	@import '../style/colors.scss';

	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		border-bottom: 1px solid rgba(62,62,62,0.1);
		width: 100%;
	}

	.item-container {
		position: relative;
		margin: 0 16px;
		padding: 8px 0;
		display: flex;
		align-items: center;
	}

	.item-title {
	}
	.selected::after {
		content: '';
		position: absolute;
		width: calc(100% + 16px);
		left: -8px;
		height: 2px;
		background-color: nth($blue, 1);
		display: block;
		bottom: -1px;
	}
</style>
