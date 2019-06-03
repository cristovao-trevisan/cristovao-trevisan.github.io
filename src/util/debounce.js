const debounce = (time, call) => {
  let timeout = null
  return () => {
    if (timeout) return
    timeout = setTimeout(() => {
      timeout = null
      call()
    }, time)
  }
}

export default debounce
