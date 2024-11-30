import { observable } from 'mobx'

const counterStore = observable({
  counter: 0,
  curTab: 0,
  counterStore() {
    this.counter++
  },
  increment() {
    this.counter++
  },
  decrement() {
    this.counter--
  },
  incrementAsync() {
    setTimeout(() => {
      this.counter++
    }, 1000)
  },
  changeTab(index: number) {
    this.curTab = index;
  }
})

export default counterStore
