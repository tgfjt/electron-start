const html = require('choo/html')

module.exports = (state, prev, send) => {
  function plus () {
    send('increment')
  }

  function minus () {
    send('decrement')
  }

  return html`
    <main>
      <h1>${state.title}: ${state.value}</h1>
      <button onclick=${plus}>+</button>
      <button onclick=${minus}>-</button>
    </main>
  `
}
