// @ts-check
import { locale, getBrowserLocale, translations } from 'svelte-intl'

translations.update({
  pt: {
    artist: 'Artista',
    engineer: 'Engenheiro',
    homePage: 'Página Inicial',
    about: 'Sobre Mim',
  },
  en: {
    artist: 'Artist',
    engineer: 'Engineer',
    homePage: 'Home Page',
    about: 'About',
  },
})

locale.set(getBrowserLocale('pt'))
// locale.set('pt')
