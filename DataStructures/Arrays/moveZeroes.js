function moveZeroes(nums) {
    var leftMostZeroInd = -1;
    encounteredFirstZero = false;
    for (let i=0; i<nums.length; i++) {
        if (!encounteredFirstZero && nums[i] === 0) {
            leftMostZeroInd = i;
            encounteredFirstZero = true;
        }
        if (nums[i] !== 0 && encounteredFirstZero) {
            nums[leftMostZeroInd] = nums[i];
            nums[i] = 0;
            leftMostZeroInd++;
        }
    }
}

nums = [2,1];
moveZeroes(nums);
console.log(nums);