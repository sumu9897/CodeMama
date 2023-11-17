# Input a number
number = int(input())

# Check if the number is positive, negative, or zero
if number > 0:
    print("{} is a positive number.".format(number))
elif number < 0:
    print("{} is a negative number.".format(number))
else:
    print("The number is zero.")