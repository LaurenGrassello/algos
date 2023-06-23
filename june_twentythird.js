// Dijkstra's algorithm
// find the shortest path between nodes in a graph.

class PriorityQueue {
    constructor() {
        this.collection = [];
    }

    enqueue(element) {
        if (this.isEmpty()) {
            this.collection.push(element);
        } else {
            let added = false;
            for (let i = 1; i <= this.collection.length; i++) {
                if (element[1] < this.collection[i - 1][1]) {
                    this.collection.splice(i - 1, 0, element);
                    added = true;
                    break;
                }
            }
            if (!added) {
                this.collection.push(element);
            }
        }
    }

    dequeue() {
        return this.collection.shift();
    }

    isEmpty() {
        return (this.collection.length === 0);
    }
}

function dijkstraAlgorithm(graph, startNode) {
    let distances = {};
    let prev = {};
    let pq = new PriorityQueue();

    distances[startNode] = 0;
    pq.enqueue([startNode, 0]);

    for (let node in graph) {
        if (node !== startNode) distances[node] = Infinity;
        prev[node] = null;
    }

    while (!pq.isEmpty()) {
        let shortestStep = pq.dequeue();
        let currentNode = shortestStep[0];

        for (let neighbor in graph[currentNode]) {
            let distance = distances[currentNode] + graph[currentNode][neighbor];

            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
                prev[neighbor] = currentNode;
                pq.enqueue([neighbor, distance]);
            }
        }
    }

    return distances;
}

let graph = {
    A: {B: 1, C: 4},
    B: {A: 1, C: 2, D: 5},
    C: {A: 4, B: 2, D: 1},
    D: {B: 5, C: 1}
};

console.log(dijkstraAlgorithm(graph, 'A'));
