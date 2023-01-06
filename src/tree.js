/**
 * 树：
 * 二叉搜索树（二叉查找树，二叉排序树）：每个节点最多两个子节点，左节点的值均小于等于根节点值，右节点大于等于根节点值，左右子树也为二叉搜索树
 * 
 */

// 定义树节点
class Node {
  constructor(data) {
    this.left = null
    this.right = null
    this.value = data
  }
}

class Tree {
  constructor() {
    this.root = null
  }

  // 插入一个节点
  insert(value) {
    const node = new Node(value)
    // 若根节点不存在，则直接置为根节点
    if(!this.root) {
      this.root = node
    }else {
      // 若存在根节点，直接调用insertNode
      this.insertNode(this.root, node)
    }
  }

  // 根据指定父节点，插入子节点
  insertNode(root, newNode) {
    // 判断节点的值与根节点值的大小，决定插入到左节点还是右节点，逐级递归调用
    if(newNode.value < root.value) {
      root.left ? this.insertNode(root.left, newNode) : root.left = newNode
    }else {
      root.right ? this.insertNode(root.right, newNode) : root.right = newNode
    }
  }

  // 根据指定父节点，删除子节点
  removeNode(root, value) {
    if(!root)
      return null
    // 删除节点处于左边，递归调用
    if(value < root.value) {
      root.left = this.removeNode(root.left, value)
      return root
    }else if(value > root.value) {
      root.right = this.removeNode(root.right, value)
      return root
    }else {
      // 删除节点为根节点
      if(!root.left && !root.right) {
        root = null
        return root
      }else if(root.left && !root.right) {
        // 只有左节点存在，将左节点置为root即可
        root = root.left
        return root
      }else if(!root.left && root.right) {
        // 只有右节点存在，将右节点置为root即可
        root = root.right
        return root
      }else {
        // 两侧均有子节点

      }
    }
  }

  // 前序遍历
  preOrder(root) {
    if(root) {
      console.log('root value: ', root.value)
      this.preOrder(root.left)
      this.preOrder(root.right)
    }
  }

  // 中序遍历
  inOrder() {

  }

  // 后序遍历
  postOrder() {

  }
}

const tree = new Tree()

// test insert
tree.insert(5)
tree.insert(4)
tree.insert(10)
tree.insert(3)

// console.log(JSON.stringify(tree, null, 2))

// test preOrder inOrder postOrder
const root = tree.root
console.log('root: ', root)
tree.preOrder(root)