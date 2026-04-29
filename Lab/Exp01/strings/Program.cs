namespace strings
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string greeting = "Hello";
            Console.WriteLine(greeting);

            Console.WriteLine();

            string greeting2 = "Nice to meet you!";
            Console.WriteLine(greeting2);

            Console.WriteLine();

            string txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            Console.WriteLine("The length of the txt string is: " + txt.Length);
            Console.WriteLine();

            string txt1 = "Hello World";
            Console.WriteLine(txt1.ToUpper());   // Outputs "HELLO WORLD"
            Console.WriteLine(txt1.ToLower());   // Outputs "hello world"


            //
        }
    }
}
