<script context="module">
	export async function preload(page, session) {
		const { lang } = page.query
		return { lang }
	}
</script>

<script>
  import '../locale'
  import { locale } from 'svelte-intl'

  export let segment = ''
  export let lang

  lang && locale.set(lang)

  const locales = ['pt', 'en']
</script>

<slot></slot>
<svelte:head>
  {#each locales as locale}
    <!-- <a href={`/webpage/lang/${locale}${segment}`}>{locale}</a> <br /> -->
    <!-- <a href={`${segment}?lang=${locale}`}>{locale}</a> <br /> -->
    <link rel="alternate" hreflang={locale} href={`${segment}?lang=${locale}`} />
  {/each}
</svelte:head>
