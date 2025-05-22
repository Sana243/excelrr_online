class SmallestNumber1{
 public static void main(String[]args){
      int a=21;
      int b=26;

//int smallest=(a>b)?((a>c)?a:c):b;
int smallest=(a>b)? b:a;

System.out.println("the smallest number is "+smallest);

}
}