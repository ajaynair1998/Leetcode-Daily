function findOrder(numCourses, prerequisites) {
  // final topologically sorted array
  let finalTopologicallySortedArray = [];

  // Create adjacency list from the prequisites given
  let adjacencyList = makeAdjacencyList(prerequisites, numCourses);

  // Now create a list containing all the indegrees of all the nodes by using the adjacency list we made
  let indegreeList = calculateIndegrees(adjacencyList);

  //   Start by adding the souce nodes into the queue ==> nodes with 0 indegree
  let queue = [];

  for (let node in indegreeList) {
    if (indegreeList[node] === 0) {
      queue.push(node);
    }
  }

  //   Now start by taking each node out of the queue by shifting from the front
  while (queue.length) {
    let currentVertex = Number(queue.shift());
    finalTopologicallySortedArray.push(currentVertex);

    // Now iterate through the children of the current vertex node and decrement their indegrees by one
    // if their indegree was one that means by decrementing they will become a source node in the next iteration
    // console.log(adjacencyList,currentVertex)
    let childrenOfCurrentVertex = adjacencyList[currentVertex];

    childrenOfCurrentVertex.forEach((child) => {
      if (indegreeList[child] > 1) {
        indegreeList[child] = --indegreeList[child];
      } else {
        indegreeList[child] = --indegreeList[child];
        queue.push(child);
      }
    });
  }

  //   if we were able to remove all the indegrees it means there was no cycle

  return finalTopologicallySortedArray.length === numCourses
    ? finalTopologicallySortedArray
    : [];
}

function makeAdjacencyList(list, numberOfCourses) {
  let adjacencyList = {};

  //   initialise with zeroes
  for (let i = 0; i < numberOfCourses; i++) {
    adjacencyList[i] = [];
  }

  //   WE HAVE TO MAKE THE DIRECTION REVERSE SINCE FIRST VALUE DEPENDS ON THE SECOND ONE TO COMPLETE

  for (let [child, parent] of list) {
    // // IMP -> TO MAKE SURE EVERY NODE HAS AN ADJACENCY LIST -> OTHERWISE ANY CHILD WITHOUT ANY INCOMING WILL BE AVOIDED
    adjacencyList[parent].push(child);
  }

  return adjacencyList;
}

function calculateIndegrees(adjacencyList) {
  let indegreeList = {};

  //   initialise the indegree list with 0 values for each node
  for (let node in adjacencyList) {
    indegreeList[node] = 0;
  }

  //   Take Each key pair in adjacency List
  for (let node in adjacencyList) {
    let children = adjacencyList[node];

    children.forEach((child) => {
      indegreeList[child] = ++indegreeList[child];
    });
  }

  return indegreeList;
}
