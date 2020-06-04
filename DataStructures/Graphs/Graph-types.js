// Edge List
const graph = [[0,2], [2,3], [2,1], [1,3]]; // This graph states each connection between each node: 0--2, 2--3, 2--1, 1--3

// Adjacent List: index is the node and the value is the node's neighbors
const graph = [[2], [2,3], [0,1,3], [1,2]]; // 0--2, 1--2 1--3, 2--0 2--1 2--3, 3--1 3--2

// Adjacent Matrix
const graph = [
    [0,0,1,0],
    [0,0,1,1],
    [1,1,0,1],
    [0,1,1,0]
]; // This represents the same thing as the adjacent list