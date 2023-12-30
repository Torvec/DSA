//! Graphs
//! ===============================================================================================
// Adjacency matrix where A is connected to B, B to A, B to C, and C to B
const matrix = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
];

// Adjacency list
adjacencyList = {
  A: ["B"],
  B: ["A", "C"],
  C: ["B"],
};

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }
  removeVertex(vertex) {
    if (!this.adjacencyList[vertext]) {
      return;
    }
    for (let adjacentVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertext, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  }
  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
  }
  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
    }
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.display();
// A -> B
// B -> A, C
// C -> B
graph.hasEdge("A", "B"); // True
graph.hasEdge("A", "C"); // False

//! Directed Acyclic Graph
//! ===============================================================================================

// Graph Algorithms: Prim's, Kruskal's, Floyd's