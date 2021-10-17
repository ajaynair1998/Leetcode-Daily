class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array) {
    array.push(this.name);
    this.queue = this.children;

    while (this.queue.length) {
      this.currentNode = this.queue.shift();
      array.push(this.currentNode.name);
      this.queue = [...this.queue, ...this.currentNode.children];
    }
    return array;
  }
}
