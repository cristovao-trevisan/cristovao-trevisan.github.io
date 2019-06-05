<script>
  import { onMount } from 'svelte'
  import AsyncImage from '../../components/gallery/AsyncImage.svelte'
  import FullScreenImage from '../../components/gallery/FullScreenImage.svelte'

  const basepath = 'img/pictures-2019-06-04'
  const listPath = '400px'
  const qualityPath = '2048px'
  const pictures = [
    '_ANA1931.jpg',
    '_ANA1926.jpg',
    '_ANA1900.jpg',
    '_ANA1829.jpg',
    '_ANA1869.jpg',
    '_ANA1874.jpg',
    '_ANA1880.jpg',
    '_ANA1882.jpg',
    '_ANA1916.jpg',
    '_ANA1915.jpg',
    '_ANA1886.jpg',
  ]

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
    initial="{basepath}/blur/{selected}"
    src="{basepath}/2048px/{selected}"
  />
{/if}

<div class="container">
  {#each pictures as picture, index (picture)}
    <AsyncImage
      initial="{basepath}/blur/{picture}"
      src="{basepath}/400px/{picture}"
      alt="picture-{index}"
      on:click={selectPicture(picture, index)}
    />
  {/each}
</div>

<style>
  .container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 16px;
  }
</style>
