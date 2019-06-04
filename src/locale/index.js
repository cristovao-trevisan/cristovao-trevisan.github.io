// @ts-check
import { locale, getBrowserLocale, translations } from 'svelte-intl'

translations.update({
  pt: {
    artist: 'Artista',
    engineer: 'Engenheiro',
    homePage: 'Página Inicial',
    about: 'Sobre Mim',
    'what are you interested in?': 'No que você está interessado?',
  },
  en: {
    artist: 'Artist',
    engineer: 'Engineer',
    homePage: 'Home Page',
    about: 'About',
    'what are you interested in?': 'What are you interested in?',
  },
})

locale.set(getBrowserLocale('pt'))
// locale.set('pt')
