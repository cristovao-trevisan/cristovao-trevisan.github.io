<script>
  import { locale, locales } from 'svelte-3-intl'

	const setLocale = e => locale.set(e.target.value)
</script>

<select value={$locale} on:change={setLocale}>
  {#each $locales as l}
    <option value={l}> {l} </option>
  {/each}
</select>
