<script>
  import { createEventDispatcher } from 'svelte'
  export let initial
  export let src

  const dispatch = createEventDispatcher()
  const onClose = () => dispatch('close')

  const handleKeydown = (e) => {
    if (e.key === 'Escape') onClose()
    else if (e.key === 'ArrowRight') dispatch('next')
    else if (e.key === 'ArrowLeft') dispatch('previous')
  }
</script>

<svelte:window on:keydown={handleKeydown}/>

<div class="overlay">
  <div class="overlay-container">
    <div class="overlay-mask" on:click={onClose} />
    <img style="position: absolute; width: 78%;" src={initial} alt="loading" />
    <img src={src} alt="high resolution picture" />
  </div>
</div>

<style>
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
  }
  img {
    z-index: 1;
    object-fit: contain;
    width: 80%;
    max-width: 2048px;
    height: auto;
    max-height: 80%;
    text-align: center;
  }
</style>
