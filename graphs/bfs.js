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
  
    bfs(startVertex) {
      if (!startVertex || !this.vertices[startVertex]) {
        return;
      }
      let visited = {};
      let queue = [startVertex];
      visited[startVertex] = true;
  
      while (queue.length) {
        let currentVertex = queue.shift();
        console.log(currentVertex);
  
        for (let neighbor of this.vertices[currentVertex]) {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            queue.push(neighbor);
          }
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
  graph.addEdge("A", "C");
  graph.addEdge("B", "D");
  graph.addEdge("C", "E");
  
  graph.bfs("A");
  