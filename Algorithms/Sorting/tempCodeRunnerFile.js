function insertionSort(arr) {
    let temp;
    for (let i = 1; i < arr.length+1; i++) {
        console.log(arr);
        for (let j = 0; j <= i; j++) {
            if (arr[i] < arr[j]) {
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
}

const nums2 = [4, 9, 2, 3, 6, 1, 5, 0]
insertionSort(nums2);