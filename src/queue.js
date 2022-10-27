/**
 * 队列，即“堆” Last In, Last Out
 */
class Queue {
  constructor(...args) {
    this.queue = [...args]
  }
  // 入队
  enqueue(...item) {
    return this.queue.push(...item)
  }
  // 出队
  dequeue() {
    // 从头部删除
    return this.queue.shift()
  }
  // 队列头部元素
  head() {
    return this.isEmpty() ? undefined : this.queue[0]
  }
  // 队列尾部元素
  tail() {
    return this.isEmpty() ? undefined : this.queue[this.size() - 1]
  }
  isEmpty() {
    return this.size() === 0
  }
  size() {
    return this.queue.length
  }
}

const queue = new Queue(1,2,3)

queue.enqueue(4,5,6)
console.log('queue: ', queue)

queue.dequeue()
console.log('queue: ', queue)
console.log('head: ', queue.head())
console.log('tail: ', queue.tail())
