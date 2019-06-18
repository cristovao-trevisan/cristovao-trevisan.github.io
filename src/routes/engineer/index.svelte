<script>
  import { _ } from 'svelte-intl'
  import SocialNetwork from '../../components/SocialNetwork.svelte'
  import { LinkedinIcon, GithubIcon, TwitterIcon } from 'svelte-feather-icons'

  const socialNetworks = [{
    path: 'https://www.linkedin.com/in/cristovao-trevisan',
    icon: LinkedinIcon,
  }, {
    path: 'https://twitter.com/cristovao_tre',
    icon: TwitterIcon,
  }]
</script>

<svelte:head>
	<title> Cristóvão Trevisan - {$_('engineer')} </title>
	<meta name="Description" content="{$_('metaDescription')}, {$_('engineerPage.metaDescription')}">
</svelte:head>

<div class="container">
  <div class="title">
    Cristóvão Trevisan
  </div>
  <div class="text" style="margin-top: 40px; margin-bottom: 16px;">
    {@html $_('engineerPage.presentation')}
  </div>
  <div class="subtitle" style="margin: 16px 0;">
    {$_('engineerPage.Follow me on GitHub!')}
  </div>

  <SocialNetwork
    icon={GithubIcon}
    title='cristovao-trevisan'
    path='https://github.com/cristovao-trevisan'
  />

  <div class="social-networks">
    {#each socialNetworks as item (item.path)}
      <SocialNetwork {...item} />
    {/each}
  </div>
</div>

<style lang="scss">
  @import '../../style/colors.scss';
  .container {
		text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-left: 5%;
    width: 90%;
    height: 100%;
  }
  .title {
    font-family: 'Street Slab';
    font-weight: 500;
		font-size: 43px;
    margin-bottom: 0;
    color: nth($blue, 1);
    margin-top: 24px;
  }
  .text {
    text-align: justify;
    max-width: 800px;
  }
  .subtitle {
    font-family: 'Street Slab';
    font-weight: 500;
		font-size: 18px;
    margin-bottom: 0;
    color: nth($gray, 1);
  }
  .social-networks {
    display: flex;
    flex-wrap: wrap;
  }
</style>
