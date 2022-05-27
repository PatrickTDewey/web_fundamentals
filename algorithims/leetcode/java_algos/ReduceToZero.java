package java_algos;

public class ReduceToZero {
	private int steps;

	public ReduceToZero() {
	}

	public int numberOfSteps(int num) {
		if (num == 0)
			return steps;

		steps++;

		if (num % 2 == 0) {
			return numberOfSteps(num / 2);
		} else {
			return numberOfSteps(num - 1);
		}
	}
}
