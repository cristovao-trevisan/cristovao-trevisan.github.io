<script>
  import { createEventDispatcher } from 'svelte'
  export let open = false

  const dispatch = createEventDispatcher()

  const onClose = () => dispatch('close')
</script>

<div hidden={!open} >
	<div class="overlay mask" on:click={onClose} />
	<div class="overlay container">
		<slot />
	</div>
</div>

<style>
	.overlay {
		position: fixed;
		height: 100vh;
		top: 0;
		left: 0;
		z-index: 999;
	}
	.mask {
		background-color: black;
		width: 100vw;
		opacity: 0.4;
	}
	.container {
		width: 200px;
		background-color: white;
	}
</style>