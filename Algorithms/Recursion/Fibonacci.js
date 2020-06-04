function fibonacciIterative(n) {
    let answer = 0;
    let first = 0;
    let second = 1;
    if (n === 0) {
        return first;
    }
    if (n === 1) {
        return second;
    }

    for (let i = 1; i < n; i++) {
        answer = first + second;
        first = second;
        second = answer;
    }
    return answer;
}
console.log("Iterative: " + fibonacciIterative(7));

function fibonacciIterativeRecursive(n) {
    if (n < 2) {
        return n;
    }
    return fibonacciIterativeRecursive(n-1) + fibonacciIterativeRecursive(n-2);
}

console.log("Iterative: " + fibonacciIterativeRecursive(4));