<script>
  import { onMount, createEventDispatcher } from 'svelte'

  export let initial
  export let src
  export let alt

  let image

  const loadImage = () => image.setAttribute('src', image.getAttribute('data-src'))
  onMount(loadImage)
</script>

<img
  src={initial}
  data-src={src}
  alt={alt}
  bind:this={image}
/>

<style>
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
</style>
