function reverseStringIterative(str) {
    out = '';
    for (let i = str.length-1; i >= 0; i--) {
        out += str[i];
    }
    return out;
}

function reverseStringRecursive(str) {
    if (str.length === 1) {
        return str;
    }
    return str[str.length-1] + reverseStringRecursive(str.substring(0,str.length-1));
}
console.log(reverseStringRecursive('yoyo mastery'));