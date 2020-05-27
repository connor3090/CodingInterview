function rotate(nums, k) {
    const queue = [];
    k = k % nums.length;
    for (let i=0; i < nums.length; i++) {
        if (i < k) {
            queue.push(nums[i]);
        } else {
            queue.push(nums[i]);
            nums[i] = queue.shift();
        }
    }
    for (let i = 0; i < k; i++) {
        nums[i] = queue.shift();
    }
}

nums = [1];
k = 1
rotate(nums,4);
console.log(nums);