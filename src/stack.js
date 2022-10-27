/**
 * 堆栈：即“栈”，Last In, First Out
 */
class Stack {
  constructor(...args) {
    this.stack = [...args]
  }
  // 入栈
  push(...item) {
    console.log('item: ', ...item)
    return this.stack.push(...item)
  }
  // 出栈
  pop() {
    return this.stack.pop()  // 从数组尾部弹出
  }
  // 返回栈顶元素【即最后一个进入栈的元素】
  peek() {
    return this.isEmpty() ? undefined : this.stack[this.size()-1]
  }

  isEmpty() {
    return this.size() === 0
  }

  size() {
    return this.stack.length
  }
}

const stack = new Stack(1,2,3)

stack.push(4, 5, 6)
console.log('stack: ', stack)

stack.pop()
console.log('stack: ', stack)

console.log('peek: ', stack.peek())