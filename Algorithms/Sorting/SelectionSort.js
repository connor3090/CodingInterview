function selectionSort(arr) {
    let temp;
    let index;
    for (let i = 0; i < arr.length; i++) {
        console.log(arr);
        temp = arr[i];
        index = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < temp) {
                temp = arr[j];
                index = j;
            }
        }
        arr[index] = arr[i];
        arr[i] = temp;
        
    }
}

const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const nums2 = [4,9,2,3,6,1,5,0]
selectionSort(nums2);