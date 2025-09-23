class sample {
    int a;
    int b;

    int add(int x,int y ){
        return x+y;
    }
    public static void main(String[] args) {
        sample sc= new sample();
        int result = sc.add(5,10);
        System.out.println("The sum is: " + result);
    }
}