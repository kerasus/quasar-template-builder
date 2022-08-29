import * as mutations from './mutations'

export function updateStore(context, data) {
  let mutation = ''
  Object.keys(data).forEach(key => {
    mutation = 'update' + key.substring(0, 1).toUpperCase() + key.substring(1)
    if (mutations[mutation]) {
      context.commit(mutation, data[key])
    }
  })
}
