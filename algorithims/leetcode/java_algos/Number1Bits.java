package java_algos;

public class Number1Bits {
	// Contraint: input must be a binary number of length 32
	private int length;

	// constructors
	public Number1Bits() {
	};

	public int hammingWeight(int n) {
		if (length == 32) return 0;
		length++;
		return (n & 1) + hammingWeight(n >>>= 1);
	}

	public int hammingWeightIterative(int n) {
		int count = 0;
		for (int i = 0; i < 32; i++) {
			count += n & 1;
			n >>>= 1;
		}
		return count;
	}
}
