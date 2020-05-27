// Create a function that reverses a string: 'Hi my name is Andrei' should be: 'ierdnA si eman yM iH'
str = 'Hi My name is Andrei';
function reverse(str) {
    // check input
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'hmm that is not good';
    }
    strArr = str.split('');
    revStr = '';
    for (let i=strArr.length-1; i >= 0; i--) {
        revStr += strArr[i];
    }
    return revStr;
}

function reverse2(str) {
    return str.split('').reverse().join('');
}

const reverse3 = str => [...str].reverse().join('');
console.log(reverse3(str));