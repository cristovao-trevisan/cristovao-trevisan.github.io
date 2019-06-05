<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher()
  const onClick = () => dispatch('click')
</script>

<div>
  <button class="button hoverlay" on:click={onClick}>
    <slot />
  </button>
</div>

<style>
  .button {
    cursor: pointer;
    position: relative;
    -webkit-tap-highlight-color: transparent;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 4px;
    outline: none;
    background-color: transparent;
  }
</style>
