<script>
  import { createEventDispatcher } from 'svelte'

  export let initial
  export let src
  export let alt

  const loadImage = (e) => {
    const image = e.target
    image.setAttribute('src', image.getAttribute('data-src'))
  }
</script>

<div class="container">
  <img
    on:load={loadImage}
    src={initial}
    data-src={src}
    alt={alt}
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
