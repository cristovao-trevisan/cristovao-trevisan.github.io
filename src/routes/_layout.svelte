<script context="module">
	export async function preload(page, session) {
		const { lang } = page.query
		return { lang }
	}
</script>

<script>
  import '../locale'
  import { locale, _ } from 'svelte-intl'

  export let segment = ''
  export let lang
  lang && locale.set(lang)
</script>

<svelte:head>
	<meta name="Description" content={$_('metaDescription')}>
</svelte:head>

<slot />

