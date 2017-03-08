module.exports = {
  state: {
    title: 'こんにちは世界',
    value: 0
  },
  reducers: {
    increment: (state, data) => ({ value: state.value + 1 }),
    decrement: (state, data) => ({ value: state.value - 1 })
  }
}
