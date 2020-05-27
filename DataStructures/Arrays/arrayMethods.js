const strings = ['a', 'b', 'c', 'd'];

// String Operations

// push O(1)
strings.push('e');

// pop O(1)
strings.pop();
strings.pop();

// unshift O(n) because you need to loop through the array to shift their index one over to the right
strings.unshift('x'); // Add x at the beginning of the array

// splice O(n) same as unshift, but doing it somewhere else
strings.splice(2, 0, 'alien');

console.log(strings);