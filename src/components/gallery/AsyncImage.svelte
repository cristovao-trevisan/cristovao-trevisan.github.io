<script>
  import { onMount, createEventDispatcher } from 'svelte'

  export let initial
  export let src
  export let alt

  let image

  const dispatch = createEventDispatcher()

  const loadImage = () => image.setAttribute('src', image.getAttribute('data-src'))
  onMount(loadImage)
</script>

<div class="image-container" on:click={() => dispatch('click')}>
  <img
    src={initial}
    data-src={src}
    alt={alt}
    bind:this={image}
  />
</div>

<style lang="scss">
  @import '../../style/shadows.scss';

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
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
</style>
