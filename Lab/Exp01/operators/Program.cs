namespace operators
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //arithmetic operators
            int x = Convert.ToInt32(Console.ReadLine());
            int y = Convert.ToInt32(Console.ReadLine());
          
            Console.WriteLine("Addn:"+ (x+y));
            Console.WriteLine("Subn:"+ (x - y));
            Console.WriteLine("Multn:"+ (x * y));
            Console.WriteLine("Divn:"+ (x / y));
            Console.WriteLine("Modulus:"+ (x % y));

            Console.WriteLine();

            //assignment operators
            int a = x; // = assignment
            int b = y;
            Console.WriteLine("a: " + a);
            Console.WriteLine("b: " + b);
            Console.WriteLine();
            a += 5; // a = a + 5
            b += 5;
            Console.WriteLine( a);
            Console.WriteLine( b);
            Console.WriteLine();

            //comparison operators
            Console.WriteLine(x == y); //equal to
            Console.WriteLine(x > y);
            Console.WriteLine(x<y);
            Console.WriteLine(x >= y);
            Console.WriteLine(x <= y);
            Console.WriteLine(x!=y);

            Console.WriteLine();

            //logical Operators

            Console.WriteLine(true && true);
            Console.WriteLine(true || false);
            Console.WriteLine(!false);




        }
    }
}
