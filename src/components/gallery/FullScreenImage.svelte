<script>
  import { createEventDispatcher } from 'svelte'
  import { ArrowRightIcon } from 'svelte-feather-icons'

  export let initial
  export let src

  const dispatch = createEventDispatcher()
  const onClose = () => dispatch('close')
  const onNext = () => dispatch('next')
  const onPrevious = () => dispatch('previous')

  const handleKeydown = (e) => {
    if (e.key === 'Escape') onClose()
    else if (e.key === 'ArrowRight') onNext()
    else if (e.key === 'ArrowLeft') onPrevious()
  }
</script>

<svelte:window on:keydown={handleKeydown}/>

<div class="overlay">
  <div class="container">
    <div class="mask" on:click={onClose} />
    <img class="blur" src={initial} alt="loading" />
    <img class="image" src={src} alt="high resolution picture" />
    <div class="icon-left" on:click={onPrevious}> <div class="icon" /> </div>
    <div class="icon-right" on:click={onNext}> <div class="icon" /> </div>
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
  .container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .mask {
    position: absolute;
    background-color: black;
    opacity: 0.4;
    width: 100%;
    height: 100%;
    top: 0;
		left: 0;
  }
  .image {
    background-color: #00000006;
  }
  .blur {
    position: absolute;
    max-width: 78%;
    pointer-events: none;
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

  .icon-right, .icon-left {
    z-index: 2;
    position: absolute;
    width: 80px;
    height: 100px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
  }
  .icon-right { right: calc(5% - 18.5px); }
  .icon-left { left: calc(5% - 18.5px); transform: rotate(180deg); }

  .icon {
    width: 37px;
    height: 56px;
    position: relative;
    right: calc(5% - 8px);
    overflow: hidden;
  }
  .icon:before {
    content: "";
    position: absolute;
    width: 10px;
    height: 40px;
    background-color: white;
    transform: rotate(35deg);
    top: 21px;
    right: 50%;
  }
  .icon:after {
    content: "";
    position: absolute;
    width: 10px;
    height: 40px;
    background-color: white;
    transform: rotate(-35deg);
    bottom: 21px;
    right: 50%;
  } 
</style>
