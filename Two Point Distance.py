import math

# Input coordinates of two points
x1, y1 = map(float, input().split())
x2, y2 = map(float, input().split())

# Calculate the distance between two points
distance = math.sqrt((x2 - x1)**2 + (y2 - y1)**2)

# Output the distance with exactly two decimal points
print("Distance: {:.2f}".format(distance))