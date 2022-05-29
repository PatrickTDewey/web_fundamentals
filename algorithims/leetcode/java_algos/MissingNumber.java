package java_algos;

/**
 * MissingNumber
 */
public class MissingNumber {
	private int[] nums = {3, 0, 1};
	public int missingNumber(int[] nums) {
		int output = 0;
		int number = nums.length*(nums.length + 1) / 2;
		for (int i = 0; i < nums.length; i++) {
			output += nums[i];
		}
		return number - output;

	}

}
