export const removeScript = (id: string) => {
  const script = document.getElementById(`${id}-script`)
  if (script) {
    script.remove()
    return true
  } else {
    return false
  }
}
