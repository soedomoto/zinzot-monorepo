import { injectAPI } from '@zinzot/ui'
import type { Adapter } from 'comctx'
import type { API } from '@zinzot/ui'

const worker = new Worker(
  new URL('./background.ts', import.meta.url),
  { type: 'module' }
)

let api: any = null

export function useAPI() {
  if (!api) {
    const adapter: Adapter = {
      sendMessage: (message) => worker.postMessage(message),
      onMessage: (callback) => {
        const handler = (event: MessageEvent) => callback(event.data)
        worker.addEventListener('message', handler)
        return () => worker.removeEventListener('message', handler)
      }
    }
    api = injectAPI(adapter)
  }
  return api as API
}
