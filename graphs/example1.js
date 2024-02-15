class Graph {
    constructor() {
      this.vertices = {};
    }
  
    addVertex(vertex) {
      if (!this.vertices[vertex]) {
        this.vertices[vertex] = [];
      } else {
        console.log("Vertex already exists.");
      }
    }
  
    addEdge(vertex1, vertex2) {
      if (!this.vertices[vertex1] || !this.vertices[vertex2]) {
        console.log("One or more vertices do not exist.");
        return;
      }
      this.vertices[vertex1].push(vertex2);
      this.vertices[vertex2].push(vertex1); // for undirected graph
    }
  
    printGraph() {
      for (let vertex in this.vertices) {
        let connections = this.vertices[vertex].join(", ");
        console.log(`${vertex} -> ${connections}`);
      }
    }
  }
  
  // Usage
  let graph = new Graph();
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addVertex("D");
  graph.addEdge("A", "B");
  graph.addEdge("A", "C");
  graph.addEdge("B", "D");
  graph.addEdge("C", "D");
  
  graph.printGraph();
  