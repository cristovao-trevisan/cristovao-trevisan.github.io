<script>
  import { onMount } from 'svelte'


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
  let images = pictures.map(() => {})

  const selectPicture = (picture, index) => () => {
    selected = picture
    selectedIndex = index
  }
  const removeSelection = () => { selected = null }
  const handleKeydown = (e) => {
    if (e.key === 'Escape') removeSelection()
    else if (selected) {
      if (e.key === 'ArrowRight' && selectedIndex < pictures.length - 1) {
        selectedIndex += 1
        selected = pictures[selectedIndex]
      } else if (e.key === 'ArrowLeft' && selectedIndex > 0) {
        selectedIndex -= 1
        selected = pictures[selectedIndex]
      }
    }
  }

  const loadImageDataSrc = image => image.setAttribute('src', image.getAttribute('data-src'))
  onMount(() => images.forEach(loadImageDataSrc))
</script>

<svelte:window on:keydown={handleKeydown}/>

{#if selected}
  <div class="overlay">
    <div class="overlay-container">
      <div class="overlay-mask" on:click={removeSelection} />
      <img style="position: absolute; width: 78%;" src="{basepath}/blur/{selected}" alt="loading" />
      <img src="{basepath}/2048px/{selected}" alt="high resolution picture" />
    </div>
  </div>
{/if}

<div class="container">
  {#each pictures as picture, index (picture)}
    <div class="image-container" on:click={selectPicture(picture, index)}>
      <img
        src="{basepath}/blur/{picture}"
        data-src="{basepath}/400px/{picture}"
        alt="picture-{index}"
        bind:this={images[index]}
      />
    </div>
  {/each}
</div>

<style lang="scss">
  @import '../../style/shadows.scss';

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

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .overlay {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 999;
		height: 100vh;
		width: 100vw;
  }
  .overlay-mask {
    position: absolute;
    background-color: black;
    opacity: 0.4;
    width: 100%;
    height: 100%;
    top: 0;
		left: 0;
  }
  .overlay-container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      z-index: 1;
      object-fit: contain;
      width: 80%;
      max-width: 2048px;
      height: auto;
      max-height: 80%;
      text-align: center;
    }
  }
</style>
