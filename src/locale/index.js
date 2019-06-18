// @ts-check
import { locale, getBrowserLocale, translations } from 'svelte-intl'

translations.update({
  pt: {
    artist: 'Artista',
    engineer: 'Engenheiro',
    homePage: 'Página Inicial',
    about: 'Sobre Mim',
    gallery: 'Galeria',
    videos: 'Vídeos',
    curriculum: 'Currículo',
    personal: 'Pessoal',
    'invisivel-cordao': 'Invisível Cordão',
    'what are you interested in?': 'No que você está interessado?',
    album: 'Albúm {title}',
    metaDescription: 'Este é meu site pessoal',
    artistPage: {
      metaDescription: 'sobre mim como artista',
      presentation: `
        Olá, meu nome é <i> Cristóvão Trevisan </i>.
        Estou agora começando minha carreira artística, e meu
        objetivo é no ramo do <b> Teatro Musical </b>!!!
        <br /> <br />
      `,
      linksIntroduction: `
        Se você chegou aqui provavelmente já sabia disso e quer
        conferir alguns materiais meus. Para isso basta navegar no menu acima,
        ou aqui também:
      `,
    },
    engineerPage: {
      metaDescription: 'sobre mim como engenheiro',
      'Follow me on GitHub!': 'Me siga no GitHub!',
      presentation: `
        Olá, meu nome é Cristóvão Trevisan. Sou engenheiro eletrônico apaixonado
        por música e desenvolvimento (principalmente web, com foco em front com componentização).
        <br />
        Também me aventuro no mundo de empreendedorismo, com a startup
        <a href="https://reactivehub.io" target="_blank"> reactivehub.io </a>.
        <br />
        <br />
        Se quer conhecer alguns trabalhos interessantes meus, estão todos no GitHub:
        <ul>
          <li>
            <a href="https://github.com/cristovao-trevisan/guitar-digitizer-documentation" target="_blank"> Digitalizador de Guitarra </a>:
            Meu TCC, um projeto complexo com hardware, firmware e software que prova o conceito da digitalização
            de uma guitarra. Esse link é o documento (em Latex/pdf), que aponta pra todos os repositórios.
          </li>
          <li>
            <a href="https://github.com/cristovao-trevisan/async-resource" target="_blank"> Async Resource </a>:
            Um pacote que acho muito útil, pra gerenciar recursos (HTTP principalmente) em React.
          </li>
          <li>
            <a href="https://github.com/cristovao-trevisan/webpage" target="_blank"> Webpage </a>:
            Esta página que você está lendo agora, assim como o restante do meu site, uma
            brincadeira pra explorar o <a href="https://svelte.dev/" target="_blank">svelte</a>.
          </li>

          <li>
            ... muito mais no GitHub, logo abaixo.
          </li>
        </ul>
      `,
    }
  },
  en: {
    artist: 'Artist',
    engineer: 'Engineer',
    homePage: 'Home',
    about: 'About',
    gallery: 'Gallery',
    videos: 'Videos',
    curriculum: 'Curriculum',
    personal: 'Personal',
    'invisivel-cordao': '"Invisível Cordão"',
    'what are you interested in?': 'What are you interested in?',
    album: '{title} Album',
    metaDescription: 'This is my personal website',
    artistPage: {
      metaDescription: 'sobre mim como artista',
      presentation: `
        Hello, my name is <i> Cristóvão Trevisan </i>.
        I'm now beginning my artistic career, with the
        goal to become a <b> Musical Theatre Actor </b>!!!
        <br /> <br />
      `,
      linksIntroduction: `
        If you are here you probably know that already, and want to check out
        a some content of mine. For that, just use the menu above to navigate,
        or the links bellow:
      `,
    },
    engineerPage: {
      metaDescription: 'about myself as an engineer',
      'Follow me on GitHub!': 'Follow me on GitHub!',
      presentation: `
        Hi, my name is Cristóvão Trevisan (Chris). I'm a electronics engineer in love
        with music and programming (mostly web, more focused on frontend componentization).
        <br />
        Also an entrepreneur, CTO at a startup called 
        <a href="https://reactivehub.io" target="_blank"> reactivehub.io </a>.
        <br />
        <br />
        If you're interested in a few cool projects of mine, here they are:
        <ul>
          <li>
            <a href="https://github.com/cristovao-trevisan/guitar-digitizer-documentation" target="_blank"> Guitar Digitizer </a>:
            My degree conclusion work, a project involving hardware, firmware and software to prove the concept
            of a guitar digitizer. This link is the document (Latex/pdf), but it has links to all the code repositories.
          </li>
          <li>
            <a href="https://github.com/cristovao-trevisan/async-resource" target="_blank"> Async Resource </a>:
            A very useful package, to control resources (mostly HTTP) in React.
          </li>
          <li>
            <a href="https://github.com/cristovao-trevisan/webpage" target="_blank"> Webpage </a>:
            This very own page, just like the rest of this website, a tryout of the
            <a href="https://svelte.dev/" target="_blank">svelte</a> framework.
          </li>

          <li>
            ... a lot more GitHub, right bellow.
          </li>
        </ul>
      `,
    }
  },
})

const getLocale = () => {
  if (typeof window !== 'undefined') {
    const searchRegex = /lang=([^&]+)(&|$)/
    const { search } = window.location
    if (searchRegex.test(search)) {
      return searchRegex.exec(search)[1]
    }
  }

  return getBrowserLocale('pt')
}

locale.set(getLocale())
// locale.set('pt')
