<script>
	import { _ } from 'svelte-intl'
	import AsyncImage from '../../components/gallery/AsyncImage.svelte'
	import SocialNetwork from '../../components/SocialNetwork.svelte'
	import { InstagramIcon} from 'svelte-feather-icons'
	import menuRoutes from './_menu-routes'

	const links = menuRoutes.slice(1)
</script>

<style lang="scss">
	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 16px;
		margin-left: 10%;
		width: 80%;
		text-align: justify;
		max-width: 1024px;
		flex-wrap: wrap;
	}
	.image {
		width: 50%;
		max-width: 200px;
		border-radius: 8px;
		overflow: hidden;
	}
	.presentation {
		margin: 16px;
		width: 50%;
		max-width: 800px;
		min-width: 300px;
	}
	.social-networks {
		display: flex;
		justify-content: center;
		margin: 16px 10%;
		width: 80%;
	}
</style>

<svelte:head>
	<title> Cristóvão Trevisan - {$_('artist')} </title>
</svelte:head>

<div class="container">
	<div class="image">
		<AsyncImage
			initial="img/pictures-2019-06-04/blur/_ANA1931.jpg"
			src="img/pictures-2019-06-04/400px/_ANA1931.jpg"
			alt="Cristóvão Trevisan"
		/>
	</div>

	<div class="presentation">
		{@html $_('artistPage.presentation')}
		{@html $_('artistPage.linksIntroduction')}

		<ul>
			{#each links as { path, title } (path)}
				<li>
					<a rel=prefetch href="artist/{path}">
						{$_(title)}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</div>

<div class="social-networks">
	<SocialNetwork
		icon={InstagramIcon}
		path="https://www.instagram.com/cristovao_trevisan"
		title="cristovao_trevisan"
	/>
</div>
