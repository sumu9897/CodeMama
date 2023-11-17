# Input three numbers
num1, num2, num3 = map(float, input().split())

# Calculate the average
average = (num1 + num2 + num3) / 3

# Output the average with exactly two decimal points
print("Average: {:.2f}".format(average))