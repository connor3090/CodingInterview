function containsDuplicate(nums) {
    const numObj = {};
    for (let i=0; i<nums.length; i++) {
        if (numObj[nums[i]]) {
            return true;
        }
        numObj[nums[i]] = true;
    }
    return false;
}

console.log(containsDuplicate([1,2,1,1,1]))