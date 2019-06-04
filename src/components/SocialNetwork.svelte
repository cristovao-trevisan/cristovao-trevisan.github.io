<script>
  export let icon
  export let path
  export let title
</script>

<style>
  .container {
    position: relative;
    width: fit-content;
    display: flex;
    text-decoration: none;
    padding: 4px;
    align-items: center;
  }
  .container:hover:after {
    position: absolute;
    background-color: white;
    width: 100%;
    height: 100%;
    content: '';
    opacity: 0.6;
  }

  .icon {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
  }
  .title {
    margin-left: 4px;
  }
</style>

<a href={path} class="container" target="_blank">
  <div class="icon"> <svelte:component this={icon} /> </div>
  {#if title}
    <div class="title"> {title} </div>
  {/if}
</a>
