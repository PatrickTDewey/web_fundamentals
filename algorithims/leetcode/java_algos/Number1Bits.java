package java_algos;

public class Number1Bits {
  // Contraint: input must be a binary number of length 32 
  private int binaryNumber;
  
  private final int BINARY_LENGTH = 32; 

  // constructors 
  public Number1Bits(){}; 
  
  public Number1Bits(int n){ 
    this.binaryNumber = n; 
  } 

  public int hammingWeight(){
    int  count = 0;
    int n = getBinaryNumber();
    for  (int i = 0; i < BINARY_LENGTH; i++) {
      // if we find a 1 in current position, increment count
      if((n & 1) == 1) count++;

      // shift binary number to the right, discarding binary 1s place value
      n >>>= 1;

    }

    return count;
  }

  public int getBinaryNumber(){
    return this.binaryNumber;
  }
}
