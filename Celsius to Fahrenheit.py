# Function to convert Celsius to Fahrenheit
def celsius_to_fahrenheit(celsius):
    return (celsius * 9/5) + 32

# Input temperature in Celsius
celsius = float(input())

# Convert Celsius to Fahrenheit
fahrenheit = celsius_to_fahrenheit(celsius)

# Print the result with two decimal points
print("The temperature in Fahrenheit is: {:.2f}".format(fahrenheit))