package java_algos;
import java_algos.Number1Bits;
public class Solution {
  public Solution(){};
  public static void main(String[] args){
    Number1Bits bitManipulator = new Number1Bits(00000000000000000000000000001011);
    System.out.println(bitManipulator.hammingWeight());
  }
}
