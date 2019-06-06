<script>
  import { _ } from 'svelte-intl'
  import AsyncImage from '../../../components/gallery/AsyncImage.svelte'
  import albuns from './_albuns'

  export let slug
</script>

<svelte:head>
	<title> Cristóvão Trevisan - {$_('gallery')} </title>
</svelte:head>

<div class="layout">
  <div class="container">
    {#each albuns as { title, folder, cover } (title)}
      <a rel=prefetch class="item-container hoverlay" href="artist/gallery/album/{title}">
        <div class="image-container">
          <AsyncImage
            initial="{folder}/blur/{cover}"
            src="{folder}/400px/{cover}"
            alt="{title}"
          />
        </div>
        <div> {$_(title)} </div>
      </a>
    {/each}
  </div>
</div>

<style lang="scss">
  @import '../../../style/shadows.scss';

  .layout {
    display: flex;
    justify-content: center;
    margin-top: 16px;
  }
  .container {
    display: flex;
    width: 100%;
    max-width: 1024px;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
  }
  .item-container {
    margin-bottom: 8px;
    position: relative;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    align-items: center;
  }
  
  .image-container {
    margin-bottom: 2px;
    width: 200px;
    height: 200px;
    box-shadow: $shadow-2;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
  }
</style>
