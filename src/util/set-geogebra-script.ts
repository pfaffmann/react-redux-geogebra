export const setScript = (
  url: string,
  id: string
): Promise<HTMLScriptElement> =>
  new Promise((resolve, reject) => {
    let ready = false
    if (!document) {
      reject(new Error('Document was not defined'))
    }

    const tag = document.getElementsByTagName('script')[0]
    const script = document.createElement('script')

    script.crossOrigin = ''
    script.id = `${id}-script`
    script.type = 'text/javascript'
    script.src = url
    script.onload = () => {
      if (!ready) {
        ready = true
        resolve(script)
      }
    }

    script.onerror = (msg) => {
      reject(new Error('Error loading script: ' + msg))
    }

    script.onabort = (msg) => {
      reject(new Error('Script loading aborted: ' + msg))
    }

    if (tag.parentNode != null) {
      //tag.parentNode.insertBefore(script, tag);
      tag.parentNode.insertBefore(script, tag)
    }
  })
