function firstRecurringNumber(nums) {
    let numSet = {};
    for (let i = 0; i < nums.length; i++) {
        if (numSet[nums[i]]) {
            return nums[i];
        } else {
            numSet[nums[i]] = true;
        }
    }
    return undefined
}

console.log(firstRecurringNumber([1, 6, 4, 3 ,4, 6]));