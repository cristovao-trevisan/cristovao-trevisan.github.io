<script>
	import { _ } from 'svelte-intl'

	export let routes = []
	export let segment = ''
	export let basepath = ''

	$: parsedSegment = segment === '/' ? '' : (segment || '')
</script>

<nav class="container">
	{#each routes as { path, icon, title }}
		<div class="item-container" class:selected={parsedSegment === path}>
		  <a rel=prefetch class="item-title" href={`${basepath}/${path}`}> {$_(title)} </a>
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
		font-family: 'Street Slab';
		text-decoration: none;
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
