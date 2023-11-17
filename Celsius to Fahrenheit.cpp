#include <iostream>
#include <iomanip> // Include the header for setprecision
using namespace std;

// Function to convert Celsius to Fahrenheit
double celsiusToFahrenheit(double celsius)
{
    return (celsius * 9 / 5) + 32;
}

int main()
{
    // Input temperature in Celsius
    double celsius;
    cin >> celsius;

    // Convert Celsius to Fahrenheit
    double fahrenheit = celsiusToFahrenheit(celsius);

    // Print the result with two decimal points
    cout << "The temperature in Fahrenheit is: " << fixed << setprecision(2) << fahrenheit << endl;

    return 0;
}
