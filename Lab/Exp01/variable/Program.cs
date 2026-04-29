namespace variable
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //varible declaration and initialization
            int myNum = 5;
            double myDoubleNum = 5.99D;
            char myLetter = 'D';
            bool myBool = true;
            string myText = "Hello";

            //print variable values
            Console.WriteLine(myNum);  
            Console.WriteLine(myLetter);
            Console.WriteLine(myDoubleNum);
            Console.WriteLine(myBool);
            Console.WriteLine(myText);
            Console.WriteLine();

            //constants
            //const int myNumber = 15;
            //myNumber = 20; // error
            //Console.WriteLine(myNumber);
            //Console.WriteLine();

            //multiple variables 
            int x, y, z;
            x = y = z = 50;
            Console.WriteLine(x + y + z);
            Console.WriteLine();

            //Identifiers
            // Good
            int minutesPerHour = 60;

            // OK, but not so easy to understand what m actually is
            int m = 60;

            Console.WriteLine(minutesPerHour);
            Console.WriteLine(m);



        }
    }
}
