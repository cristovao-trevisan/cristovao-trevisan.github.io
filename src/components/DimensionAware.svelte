<script>
  import Loadable from 'svelte-loadable'
  import dimensions from '../stores/dimensions'

  export let Default
  export let Mobile
  export let Desktop
  export let props

  export let widthThreshhold = 500
  export let heightThreshhold = null

  $: width = $dimensions.width
  $: height = $dimensions.height

  let Component = Default
  $: {
    if (widthThreshhold && width < widthThreshhold ) Component = Mobile
    else if (heightThreshhold && height < heightThreshhold ) Component = Mobile
    else Component = Desktop
  }
</script>

{#if Component && Component !== Default}
  {#await Component()}
    <svelte:component this={Default} {...props} />
  {:then Result}
    <svelte:component this={Result.default} {...props} />
    <!-- promise was fulfilled -->
  {/await}
{:else}
  <svelte:component this={Default} {...props} />
{/if}
