<script>
  import { createEventDispatcher } from 'svelte';
  import { MenuIcon } from 'svelte-feather-icons'
  import FlatButton from './FlatButton.svelte'

  const dispatch = createEventDispatcher()

  const onMenu = () => dispatch('menu')
</script>

<style lang="scss">
  .margin {
    margin: 8px;
  }
  .container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border: 0;
  }

  .nav-icon {
    :global(svg) {
			height: 36px;
      width: 36px;
		}
  }
</style>

<div class="margin">
  <div class="container nav-icon">
    <slot />

    <FlatButton on:click={onMenu}>
      <MenuIcon alt="open navigation" />
    </FlatButton>
  </div>
</div>


