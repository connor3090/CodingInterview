array1 = [-3, 5, 9, 14];
array2 = [-2, 8, 15];

function mergeSortedArrays(array1, array2) {
    const numItems = array1.length + array2.length;
    const l1 = array1.length-1;
    const l2 = array2.length-1;
    const mergedArray = [];
    var ind1 = 0;
    var ind2 = 0;

    // Check input
    if (array1.length == 0) {
        return array2;
    }
    if (array2.length == 0) {
        return array1;
    }

    for (let i=0; i<numItems; i++) {
        if (ind1 > l1) {
            mergedArray.push(array2[ind2]);
            ind2++;
        }
        else if (ind2 > l2) {
            mergedArray.push(array1[ind1]);
            ind1++;
        }
        else if (array1[ind1] < array2[ind2]) {
            mergedArray.push(array1[ind1]);
            ind1++;
        }
        else {
            mergedArray.push(array2[ind2]);
            ind2++;
        }
        
    }
    return mergedArray;
}

console.log(mergeSortedArrays(array1, array2));