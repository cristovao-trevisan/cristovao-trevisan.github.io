<script>
	import { _ } from 'svelte-intl'
	import Video from '../../components/Video.svelte'
</script>

<style lang="scss">
	.container {
		display: flex;
		align-items: center;
		flex-direction: column;
		margin-top: 16px;
	}
</style>

<svelte:head>
	<title> Cristóvão Trevisan - {$_('artist')} </title>
</svelte:head>

<div class="container">
	<Video
		title="Pra Todo Adams"
		width="80%"
		maxWidth="800px"
		src="https://www.youtube.com/embed/pqIhL_pHFgE"
	/>
</div>
