# Input a string
input_string = input()

# Function to check if a string contains a vowel
def has_vowel(s):
    vowels = "AEIOUaeiou"
    for char in s:
        if char in vowels:
            return True
    return False

# Check if the string contains a vowel
if has_vowel(input_string):
    print("The string contains a vowel.")
else:
    print("The string does not contain any vowel.")
