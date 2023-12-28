
function largestSubarraySum(array) {
    // find all the possible combinations of indices so that we can see which combination will yield the highest sum
    // the value at each index of the sums array will be the sum of the values in one of the possible subarrays
    let sums = []
    let arrayLength = array.length

    for (let i = 0; i < arrayLength; i++) {
        let sum = 0
        for (let j = i; j < arrayLength; j++) {
            // track the sum by pushing it into the sums array
            sum += array[j]
            sums.push(sum)
        }
    }

    let sumsLength = sums.length
    let maxSum = null

    for (let i = 0; i < sumsLength; i++) {
        if (maxSum === null || sums[i] > maxSum) {
            maxSum = sums[i]
        }
    }

    return maxSum > 0 ? maxSum : 0
}