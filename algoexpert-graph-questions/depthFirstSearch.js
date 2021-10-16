function depthFirstSearch(array) {
  class Node {
    constructor(name) {
      this.name = name;
      this.children = [];
    }

    addChild(name) {
      this.children.push(new Node(name));
      return this;
    }

    depthFirstSearch(array) {
      // Write your code here.
      array.push(this.name);
      this.stack = [...this.children];

      while (this.stack.length) {
        let currentNode = this.stack.shift();
        currentNode.depthFirstSearch(array);
      }
      return array;
    }
  }
}
