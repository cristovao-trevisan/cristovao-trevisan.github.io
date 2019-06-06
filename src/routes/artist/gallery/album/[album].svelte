<script context="module">
  import albuns from '../_albuns'

	export async function preload(page, session) {
		const { album } = page.params;
		return albuns.find(ab => ab.title === album)
	}
</script>

<script>
  import { _ } from 'svelte-intl'
  import { onMount } from 'svelte'
  import AsyncImage from '../../../../components/gallery/AsyncImage.svelte'
  import FullScreenImage from '../../../../components/gallery/FullScreenImage.svelte'

  export let folder
  export let pictures
  export let title

  let selected = null
  let selectedIndex = -1

  const selectPicture = (picture, index) => () => {
    selected = picture
    selectedIndex = index
  }
  const removeSelection = () => { selected = null }
  const onNext = () => {
    if (selectedIndex < pictures.length - 1) {
      selectedIndex += 1
      selected = pictures[selectedIndex]
    }
  }
  const onPrevious = () => {
    if (selectedIndex > 0) {
        selectedIndex -= 1
        selected = pictures[selectedIndex]
      }
  }
</script>

{#if selected}
  <FullScreenImage
    on:close={removeSelection}
    on:next={onNext}
    on:previous={onPrevious}
    initial="{folder}/blur/{selected}"
    src="{folder}/2048px/{selected}"
  />
{/if}

<div class="title">
  {$_('album', { title: $_(title) })}
</div>

<div class="layout">
  <div class="container">
    {#each pictures as picture, index (picture)}
      <div class="image-container hoverlay" on:click={selectPicture(picture, index)}>
        <AsyncImage
          initial="{folder}/blur/{picture}"
          src="{folder}/400px/{picture}"
          alt="picture-{index}"
        />
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  @import '../../../../style/shadows.scss';

  .title {
    margin-left: calc(5% + 10px);
    margin-top: 16px;
    font-family: 'Street Slab';
    font-size: 16px;
  }
  .layout {
    display: flex;
    justify-content: center;
    margin-top: 16px;
  }
  .container {
    width: 100%;
    max-width: 1024px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
  }
  .image-container {
    position: relative;
    margin: 4px;
    width: calc(50% - 16px);
    max-width: 200px;
    height: 200px;
    box-shadow: $shadow-2;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
  }
</style>
