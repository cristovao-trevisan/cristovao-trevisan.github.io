<script context="module">
  import albuns from '../_albuns'

	export async function preload(page, session) {
		const { album } = page.params;

    const { folder, pictures } = albuns.find(ab => ab.title === album)

		return { folder, pictures }
	}
</script>

<script>
  import { onMount } from 'svelte'
  import AsyncImage from '../../../../components/gallery/AsyncImage.svelte'
  import FullScreenImage from '../../../../components/gallery/FullScreenImage.svelte'

  export let folder
  export let pictures

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

<div class="container">
  {#each pictures as picture, index (picture)}
    <div class="image-container" on:click={selectPicture(picture, index)}>
      <AsyncImage
        initial="{folder}/blur/{picture}"
        src="{folder}/400px/{picture}"
        alt="picture-{index}"
      />
    </div>
  {/each}
</div>

<style lang="scss">
  @import '../../../../style/shadows.scss';
  .container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 16px;
  }
  .image-container {
    margin-bottom: 8px;
    width: calc(50% - 16px);
    max-width: 200px;
    height: 200px;
    box-shadow: $shadow-2;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
  }
</style>
