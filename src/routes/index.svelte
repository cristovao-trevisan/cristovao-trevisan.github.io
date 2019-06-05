<script>
	import { _, locale } from 'svelte-intl'

	const items = [{
		path: 'artist',
		title: 'artist',
		image: 'img/main-links/artist.jpg',
	}, {
		path: 'engineer',
		title: 'engineer',
		image: 'img/main-links/engineer.jpg',
	}]

</script>

<style lang="scss">
	@import '../style/colors.scss';
	.title {
		text-align: center;
    font-family: 'Street Slab';
    font-weight: 500;
		font-size: 48px;
		margin-bottom: 0;
	}

	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		margin: 32px 0;
	}

	.links {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		flex-wrap: wrap;
		width: 100%;
		max-width: 800px;

		:hover {
			opacity: 0.6;
		}
	}

	.link-container {
		position: relative;
		height: 300px;
		width: 300px;
		background-color: nth($gray, 3);
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		border-radius: 2px;
		overflow: hidden;
		margin: 24px;
	}

	.link-image {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		object-fit: contain;
		opacity: 0.7;
	}

	.link-text {
		font-weight: bold;
		z-index: 1;
		color: white;
    font-family: 'Street Slab';
		font-size: 42px;
		text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 2px 6px rgba(0, 0, 0, 0.4);
	}

	.curiosity {
		width: 80%;
		max-width: 500px;
    font-style: italic;
		text-align: center;

		code {
			white-space: nowrap;
		}
	}
</style>

<svelte:head>
	<title> Cristóvão Trevisan </title>
</svelte:head>

<h1 class="title">
	Cristóvão <br /> Trevisan
</h1>

<div class="container">
	<div class="curiosity">
		{$_('what are you interested in?')}
	</div>
	<div class="links">
		{#each items as { image, title, path } (title)}
			<a rel=prefetch href={path} class="link-container">
				<img class="link-image" src={image} alt={$_(title)} />
				<div class="link-text"> {$_(title)} </div>
			</a>
		{/each}
	</div>

	{#if $locale === 'en'}
		<div class="curiosity">
			Cristóvão is a direct reference to Christopher
			(<code>'Cristóvão Colombo' = 'Christopher Columbus'</code>),
			so feel free to call me Chris.
		</div>
	{/if}
</div>
