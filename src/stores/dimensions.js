// @ts-check
import { readable } from 'svelte/store'
import debounce from '../util/debounce'

const getDimensions = () => {
  // ssr default values
  if (typeof window === 'undefined') return { width: 800, height: 600 }

  const width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth
  const height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight
  return { width, height }
}

export default readable(getDimensions(), (set) => {
  if (typeof window === 'undefined') return // ssr

  const onChange = debounce(200, () => set(getDimensions()))
  window.addEventListener('resize', onChange, false)
  return () => window.removeEventListener('resize', onChange, false)
})
