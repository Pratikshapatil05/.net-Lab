namespace datatypes
{
    internal class Program
    {
        static void Main(string[] args)
        {
            int myNum = 100000;
            Console.WriteLine(myNum);
            long myLongNum = 15000000000L;
            Console.WriteLine(myLongNum);
            float myFloatNum = 5.75F;
            Console.WriteLine(myFloatNum);
            double myDoubleNum = 19.99D;
            Console.WriteLine(myDoubleNum);
            bool isCSharpFun = true;
            bool isFishTasty = false;
            Console.WriteLine(isCSharpFun);   // Outputs True
            Console.WriteLine(isFishTasty);   // Outputs False
            char myGrade = 'B';
            Console.WriteLine(myGrade);
            string greeting = "Hello World";
            Console.WriteLine(greeting);
            var myVar = 20; // Implicitly typed variable
            Console.WriteLine(myVar.GetType());
        }
    }
}
