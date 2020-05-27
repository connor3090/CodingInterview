function maxSubArray(nums) {
    if (nums.length === 1) {
        return nums[0];
    } else {
        middle = Math.floor((nums.length-1)/2);
        sumsFromMiddle = [];
        maxLeftSum = nums[middle];
        maxRightSum = nums[middle+1];
        maxCrossingSum = 0;
        currentLeftSum = 0;
        currentRightSum = 0;
        for (let i = middle; i >= 0; i--) {
            currentLeftSum += nums[i];
            sumsFromMiddle[i] = currentLeftSum;
            if (currentLeftSum > maxLeftSum) {
                maxLeftSum = currentLeftSum;
                
            }
        }
        for (let i = middle+1; i < nums.length; i++) {
            currentRightSum += nums[i];
            sumsFromMiddle[i] = currentRightSum;
            if (currentRightSum > maxRightSum) {
                maxRightSum = currentRightSum;
            }
        }
        maxCrossingSum = maxLeftSum + maxRightSum;
        return Math.max(maxLeftSum, maxRightSum, maxCrossingSum, Math.max(...nums));
    }
}

function maxSubArray2(nums) {
    var maxEndingAtPrev = 0;
    var currentSum = 0;
    var maxSum = 0;
    for (let i=0; i<nums.length; i++) {
        if (i === 0) {
            maxEndingAtPrev = nums[i];
            maxSum = maxEndingAtPrev;
        } else {
            currentSum = Math.max(maxEndingAtPrev + nums[i], nums[i]);
            console.log(currentSum);
            if (currentSum > maxSum) {
                maxSum = currentSum;
                maxEndingAtPrev = currentSum;
            } else if (nums[i] > maxSum) {
                maxSum = nums[i];
                maxEndingAtPrev = nums[i];
                currentSum = nums[i];
            } else {
                maxEndingAtPrev = currentSum;
            }


            
        }
    }
    return maxSum;
}

console.log(maxSubArray2([-3,1,0,-1,-2,3,2,-1]));