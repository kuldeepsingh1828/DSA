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
  
    dfs(startVertex, visited = {}) {
      if (!startVertex || !this.vertices[startVertex]) {
        return;
      }
      visited[startVertex] = true;
      console.log(startVertex);
      for (let neighbor of this.vertices[startVertex]) {
        if (!visited[neighbor]) {
          this.dfs(neighbor, visited);
        }
      }
    }
  }
  
  // Usage
  let graph = new Graph();
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addVertex("D");
  graph.addVertex("E");
  graph.addEdge("A", "B");
  graph.addEdge("B", "C");
  graph.addEdge("C", "D");
  graph.addEdge("D", "E");
  
  graph.dfs("A");
  