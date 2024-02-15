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
  
    shortestPath(startVertex, endVertex) {
      let queue = [[startVertex]];
      let visited = {};
      visited[startVertex] = true;
  
      while (queue.length) {
        let path = queue.shift();
        let currentVertex = path[path.length - 1];
  
        if (currentVertex === endVertex) {
          return path;
        }
  
        for (let neighbor of this.vertices[currentVertex]) {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            let newPath = [...path, neighbor];
            queue.push(newPath);
          }
        }
      }
  
      return null;
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
  
  console.log(graph.shortestPath("A", "E")); // ["A", "C", "E"]
  