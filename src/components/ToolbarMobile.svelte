<script>
  import { createEventDispatcher } from 'svelte';
  import { MenuIcon } from 'svelte-feather-icons'
  import FlatButton from './FlatButton.svelte'

  const dispatch = createEventDispatcher()

  const onMenu = () => dispatch('menu')
</script>

<style>
  .container {
    width: calc(100% - 8px);
    border: 0;
    padding: 4px;
  }

  .nav-icon {
    width: 40px;
  }
</style>

<div class="container">
  <FlatButton on:click={onMenu}>
    <img class="nav-icon" src={MenuIcon} alt="open navigation" />
  </FlatButton>
</div>

