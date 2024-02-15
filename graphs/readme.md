<!-- Adding a Vertex: Adding a vertex to the graph. -->
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
}

// Usage
let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");



<!-- Adding an Edge: Adding an edge between two vertices. -->
class Graph {
  constructor() {
    this.vertices = {};
  }

  addEdge(vertex1, vertex2) {
    if (!this.vertices[vertex1] || !this.vertices[vertex2]) {
      console.log("One or more vertices do not exist.");
      return;
    }
    this.vertices[vertex1].push(vertex2);
    this.vertices[vertex2].push(vertex1); // for undirected graph
  }
}

// Usage
let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("B", "C");


<!-- Removing a Vertex: Removing a vertex and all its incident edges from the graph. -->
class Graph {
  constructor() {
    this.vertices = {};
  }

  removeVertex(vertex) {
    if (this.vertices[vertex]) {
      delete this.vertices[vertex];
      for (let v in this.vertices) {
        let index = this.vertices[v].indexOf(vertex);
        if (index !== -1) {
          this.vertices[v].splice(index, 1);
        }
      }
    } else {
      console.log("Vertex does not exist.");
    }
  }
}

// Usage
let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.removeVertex("B");


<!-- Removing an Edge: Removing an edge between two vertices. -->
class Graph {
  constructor() {
    this.vertices = {};
  }

  removeEdge(vertex1, vertex2) {
    if (this.vertices[vertex1] && this.vertices[vertex2]) {
      this.vertices[vertex1] = this.vertices[vertex1].filter(v => v !== vertex2);
      this.vertices[vertex2] = this.vertices[vertex2].filter(v => v !== vertex1);
    } else {
      console.log("One or more vertices do not exist.");
    }
  }
}

// Usage
let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.removeEdge("A", "B");