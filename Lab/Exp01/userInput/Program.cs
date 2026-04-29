namespace userInput
{
    internal class Program
    {
        static void Main(string[] args)
        {
            // Type your username and press enter
            Console.WriteLine("Enter username:");

            // Create a string variable and get user input from the keyboard and store it in the variable
            string userName = Console.ReadLine();

            // Print the value of the variable (userName), which will display the input value
            //Console.WriteLine("Username is: " + userName);
            Console.WriteLine($"Username :{userName}");

            Console.WriteLine();

            //Console.WriteLine("Enter your age:");
            //int age = Console.ReadLine();//error  as string cannot be implicitly converted to int
            //Console.WriteLine("Your age is: " + age);
            //Console.WriteLine();

            Console.WriteLine("Enter your age:");
            int Age = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Your age is: " + Age);
        }
    }
}
