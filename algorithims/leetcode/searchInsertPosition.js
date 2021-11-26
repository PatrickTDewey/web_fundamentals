/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target, left = 0, right = nums.length -1) => {
	let mid = Math.trunc((left + right) / 2 );
	if( left > right) {
		return left;
	}
	if( nums[mid] === target ){
		return mid;
	}
	nums[mid] > target ? right = mid - 1 : left = mid + 1;
	return searchInsert(nums, target, left, right);
}
let nums = [1,3,5,6], target = 5;
console.log(searchInsert(nums, target));
