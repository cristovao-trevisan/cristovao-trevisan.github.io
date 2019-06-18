<script>
	import { _ } from 'svelte-intl'
	import Video from '../../../components/Video.svelte'

  const videos = [{
    title: 'Pra Todo Adams',
    link: 'https://www.youtube.com/embed/pqIhL_pHFgE',
  }, {
    title: 'Travessia - Milton Nascimento',
    link: 'https://www.youtube.com/embed/rLntM8zj5U4',
  }]
</script>

<style lang="scss">
	.container {
		margin-top: 16px;
	}
  .item {
    margin-bottom: 16px;
    display: flex;
		align-items: center;
		flex-direction: column;
  }
  .title {
    font-family: Street Slab;
    width: 80%;
    max-width: 1024px;
    margin-bottom: 4px;
    font-weight: bold;
    font-size: 14px;
  }
</style>

<svelte:head>
	<title> Cristóvão Trevisan - {$_('videos')} </title>
</svelte:head>

<div class="container">
  {#each videos as { title, link } (link)}
    <div class="item">
      <div class="title"> {title} </div>
      <Video
        title={title}
        width="80%"
        maxWidth="1024px"
        src={link}
      />
    </div>
  {/each}
</div>
