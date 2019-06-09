<script context="module">
	export async function preload(page, session) {
		const { lang } = page.query
		return { lang }
	}
</script>

<script>
  import '../locale'
  import { locale } from 'svelte-3-intl'

  export let segment = ''
  export let lang
  lang && locale.set(lang)
</script>

<slot></slot>
<!-- <svelte:head>
  {#each locales as locale}
    <link rel="alternate" hreflang={locale} href={`${segment}?lang=${locale}`} />
  {/each}
</svelte:head> -->
