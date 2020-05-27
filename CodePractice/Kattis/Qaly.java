import java.util.*;

public class Qaly {
    public static void main(String args[]) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        double sum = 0;
        for (int i = 0; i < n; i++) {
            double a = in.nextDouble();
            double b = in.nextDouble();
            sum += a * b;
        }
        in.close();
        System.out.println(sum);
    }
}