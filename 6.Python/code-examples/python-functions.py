# python-functions.py

# Example of defining and using functions in Python

# Function to calculate the square of a number
def square(number):
    return number ** 2

# Function to calculate the sum of two numbers
def add_numbers(num1, num2):
    return num1 + num2

# Function to check if a number is even or odd
def is_even(number):
    if number % 2 == 0:
        return True
    else:
        return False

# Function to calculate the factorial of a number
def factorial(number):
    if number == 0:
        return 1
    else:
        return number * factorial(number - 1)

# Function to greet a person
def greet(name):
    print("Hello, " + name + "!")

# Testing the functions
print(square(5))  # Output: 25

result = add_numbers(10, 20)
print(result)  # Output: 30

print(is_even(7))  # Output: False

print(factorial(5))  # Output: 120

greet("John")  # Output: Hello, John!