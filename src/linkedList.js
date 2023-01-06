/**
 * 链表
 * 操作规律：先分别把node节点的prev找到，然后把prev的节点指向node，然后再找node节点的next，同样在把next的节点指向node
 */

/* 节点 */
class Node {
  constructor(data) {
    // data为当前节点存储的数据
    this.data = data
    // next指向下一个节点
    this.next = null
    // prev指向上一个节点
    this.prev = null
  }
}

/* 双向链表 */
class DoublyLinkedList {
  constructor() {
    // 链表开头
    this.head = null
    // 结尾
    this.tail = null
  }

  // 添加节点
  add(item) {
    let node = new Node(item)
    // 如果当前链表没有头节点，那么新节点即为头节点
    if(!this.head) {
      this.head = node
      this.tail = node
    }else {
      // 先把新增节点的prev，next进行处理
      node.prev = this.tail
      // 只需在尾部继续添加即可
      this.tail.next = node
      // 最后更新添加完新节点链表的头和尾
      this.tail = node
    }
  }

  // 在指定位置添加节点
  addAt(index, item) {
    // 游标
    let current = this.head

    // 维护查找时当前节点的索引
    let count = 1
    let node = new Node(item)

    // 从头部插入
    if(index === 0) {
      node.next = this.head
      this.head.prev = node
      this.head = node
    }else {
      // 非头部插入，需要遍历找到要插入的位置
      while(current) {
        current = current.next
        if(count === index) {
          node.prev = current.prev
          current.prev.next = node
          node.next = current
          current.prev = node
        }
        count ++
      }
    }
  }

  // 删除指定数据对应的节点
  remove(data) {
    let current = this.head
    while(current) {
      if(current.data === data) {
        // 1、链表中只存在一个节点，就是当前节点
        if(this.head === this.tail) {
          this.head = null
          this.tail = null
        }else if(this.head === current) {
          // 2、头部为目标节点
          this.head = this.head.next
          this.head.prev = null
        }else if(this.tail ===  current) {
          // 3、尾部为目标节点
          this.tail = this.tail.prev
          this.tail.next = null
        }else {
          // 4、目标节点在中间
          current.prev.next = current.next
          current.next.prev = current.prev
        }
      }
      current = current.next
    }
  }

  // 删除指定位置的节点
  removeAt(index) {
    let current = this.head
    let count = 1

    // 删除头部
    if(index === 0) {
      this.head = this.head.next
      this.head.prev = null
    }else {
      while(current) {
        current = current.next
        // 删除尾部链表
        if(current === this.tail) {
          this.tail = this.tail.prev
          this.tail.next = null
        }else if(count === index) {
          current.prev.next = current.next
          current.next.prev = current.prev
          break
        }
        count++
      }
    }
  }

  // 链表翻转
  reverse() {
    let current = this.head
    let prevNode = null
    while(current) {
      let next = current.next

      current.next = prevNode
      current.prev = next
      prevNode = current
      current = next
    }
    this.tail = this.head
    this.head = prevNode
  }

  // 交换两个节点数据
  swap(index1, index2) {
    if(index1 > index2)
      return this.swap(index2, index1)

    let current = this.head
    let firstNode = null
    let count = 0

    while(current) {
      if(index1 === count) {
        firstNode = current
      }else if(index2 === count) {
        // 交换数据
        let temp = null
        temp = firstNode.data
        firstNode.data = current.data
        current.data = temp
      }
      current = current.next
      count++
    }
    return true
  }

  // 查询链表长度
  length() {
    let length = 0
    let current = this.head

    while(current) {
      length++
      current = current.next
    }
    return length
  }

  // 查询指定节点对应的索引
  find(item) {
    let current = this.head
    let count = 0
    while(current) {
      if(current.data === item) {
        return count
      }
      current = current.next
      count++
    }
    return false
  }
}

const list = new DoublyLinkedList()

// test add
list.add(1)
list.add(2)
list.add(3)
list.add(4)
// console.log('head', list.head.data)

// test addAt
// list.addAt(1, 5)

// test remove
// list.remove(2)

// test removeAt
// list.removeAt(2)

// test reverse
// list.reverse()

// test swap
// list.swap(0, 1)

// test find
console.log('index: ', list.find(2))


// console.log('list: ', list)
// console.log('list length: ', list.length())