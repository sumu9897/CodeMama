# Input three numbers
numbers = input().split()

# Convert input to integers
num1, num2, num3 = map(int, numbers)

# Find the minimum
minimum = min(num1, num2, num3)

# Output the minimum
print("{}".format(minimum))
