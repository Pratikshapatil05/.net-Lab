namespace typeCasting
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //Implicit Casting (automatically) - converting a smaller type to a larger type size
            int myInt = 9;
            double myDouble = myInt;       // Automatic casting: int to double

            Console.WriteLine(myInt);      // Outputs 9
            Console.WriteLine(myDouble);   // Outputs 9
            Console.WriteLine();
            //Explicit Casting (manually) - converting a larger type to a smaller size type
            double myExpDouble = 9.78;
            int myExpInt = (int)myDouble;    // Manual casting: double to int

            Console.WriteLine(myExpDouble);   // Outputs 9.78
            Console.WriteLine(myExpInt);      // Outputs 9
            Console.WriteLine();
            //type conversion methods
            int myMetInt = 10;
            double myMetDouble = 5.25;
            bool myBool = true;

            Console.WriteLine(Convert.ToString(myMetInt));    // convert int to string
            Console.WriteLine(Convert.ToDouble(myMetInt));    // convert int to double
            Console.WriteLine(Convert.ToInt32(myMetDouble));  // convert double to int
            Console.WriteLine(Convert.ToString(myBool));   // convert bool to string
            Console.WriteLine();

        }
    }
}
