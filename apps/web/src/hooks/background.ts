import { provideAPI } from '@zinzot/ui'
import type { Adapter } from 'comctx'

const adapter: Adapter = {
  sendMessage: (message) => postMessage(message),
  onMessage: (callback) => {
    const handler = (event: MessageEvent) => callback(event.data)
    addEventListener('message', handler)
    return () => removeEventListener('message', handler)
  }
}

provideAPI(adapter)
