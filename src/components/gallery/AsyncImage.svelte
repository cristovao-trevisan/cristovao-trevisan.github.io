<script>
  import { onMount, createEventDispatcher } from 'svelte'

  export let initial
  export let src
  export let alt

  let image

  const loadImage = () => image.setAttribute('src', image.getAttribute('data-src'))
  onMount(loadImage)
</script>

<div class="container">
  <img
    src={initial}
    data-src={src}
    alt={alt}
    bind:this={image}
  />
</div>

<style lang="scss">
  @import '../../style/colors.scss';
  .container {
    width: 100%;
    height: 100%;
    background-color: nth($blue, 3);
  }
  img {
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
</style>
