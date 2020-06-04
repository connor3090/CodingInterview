function findFactorialRecursive(number) {
    if (number === 0 || number === 1) {
        return 1;
    }
    return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
    let answer = 1;
    while (number > 1) {
        answer *= number;
        number--;
    }
    return answer;
}

console.log(findFactorialIterative(5));