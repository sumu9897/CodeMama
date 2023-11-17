# Input two numbers
num1, num2 = map(int, input().split())

# Print the values before swapping
print("Before swapping: num1 = {}, num2 = {}".format(num1, num2))

# Swap the values
num1, num2 = num2, num1

# Print the values after swapping
print("After swapping: num1 = {}, num2 = {}".format(num1, num2))