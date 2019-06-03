<script>
  import { createEventDispatcher } from 'svelte';
  import { MenuIcon } from 'svelte-feather-icons'
  import FlatButton from './FlatButton.svelte'

  const dispatch = createEventDispatcher()

  const onMenu = () => dispatch('menu')
</script>

<style lang="scss">
  .container {
    width: calc(100% - 16Spx);
    border: 0;
    padding: 8px;
  }

  .nav-icon {
    :global(svg) {
			height: 36px;
      width: 36px;
		}
  }
</style>

<div class="container nav-icon">
  <FlatButton on:click={onMenu}>
    <MenuIcon alt="open navigation" />
  </FlatButton>
</div>

