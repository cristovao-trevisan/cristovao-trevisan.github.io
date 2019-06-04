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
		margin-top: 8px;
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
		opacity: 0.6;
	}

	.link-text {
		font-weight: bold;
		z-index: 1;
		color: white;
		font-size: 38px;
		text-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
	}

	.english-curiosity {
		width: 80%;
		max-width: 500px;
    margin-bottom: 16px;
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
	<div> Cristóvão </div>
	<div> Trevisan </div>
</h1>

<div class="container">
	<div class="links">
		{#each items as { image, title, path } (title)}
			<a href={path} class="link-container">
				<img class="link-image" src={image} alt={$_(title)} />
				<div class="link-text"> {$_(title)} </div>
			</a>
		{/each}
	</div>

	{#if $locale === 'en'}
		<div class="english-curiosity">
			Cristóvão is a direct reference to Christopher
			(<code>'Cristóvão Colombo' = 'Christopher Columbus'</code>),
			so feel free to call me Chris.
		</div>
	{/if}
</div>
