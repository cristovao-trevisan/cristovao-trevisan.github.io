<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher()
  const onClick = () => dispatch('click')
</script>

<div>
  <button class="button" on:click={onClick}>
    <slot />
  </button>
</div>

<style>
  .button {
    position: relative;
    -webkit-tap-highlight-color: transparent;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 4px;
    outline: none;
    background-color: transparent;
  }
  .button:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    background-color: white;
    opacity: 0;
    width: 100%;
    height: 100%;
  }

  .button:hover:after {
    opacity: 0.6;
  }
  .button:active:after {
    opacity: 0.8;
  }
</style>
