var twoSum = function(nums, target) {
    const complements = {};
    for (let i=0; i<nums.length; i++) {
        if (complements[nums[i]]+1) {
            return [complements[nums[i]], i];
        }
        comp = target - nums[i];
        complements[comp] = i;
        
    }
};

console.log(twoSum([2,11,7,15], 9));