# Python Basics

Python is a versatile and powerful programming language that is widely used for backend development. In this guide, we will cover the basics of Python programming, including variables, data types, and control flow.

## Variables

In Python, variables are used to store data. They can hold different types of values, such as numbers, strings, or boolean values. Here's an example of variable declaration and assignment:

```python
# Variable declaration and assignment
name = "John Doe"
age = 25
is_student = True
```

## Data Types

Python supports various data types, including:

- **Numeric Types**: Integers (`int`), floating-point numbers (`float`), and complex numbers (`complex`).
- **Strings**: Sequences of characters enclosed in single or double quotes.
- **Boolean**: Represents either `True` or `False`.
- **Lists**: Ordered collections of items.
- **Tuples**: Immutable ordered collections of items.
- **Dictionaries**: Key-value pairs.
- **Sets**: Unordered collections of unique items.

Here's an example that demonstrates different data types in Python:

```python
# Numeric types
age = 25
height = 1.75
complex_number = 2 + 3j

# Strings
name = "John Doe"
message = 'Hello, World!'

# Boolean
is_student = True

# Lists
numbers = [1, 2, 3, 4, 5]
fruits = ["apple", "banana", "orange"]

# Tuples
coordinates = (10, 20)

# Dictionaries
person = {"name": "John Doe", "age": 25}

# Sets
unique_numbers = {1, 2, 3, 4, 5}
```

## Control Flow

Control flow statements allow you to control the execution of your code based on certain conditions. Python provides several control flow statements, including:

- **Conditional Statements**: `if`, `elif`, and `else` statements to perform different actions based on different conditions.
- **Loops**: `for` and `while` loops to iterate over a sequence of items or execute a block of code repeatedly.
- **Exception Handling**: `try`, `except`, `finally`, and `raise` statements to handle and raise exceptions.

Here's an example that demonstrates the usage of control flow statements in Python:

```python
# Conditional statements
age = 25

if age < 18:
    print("You are a minor.")
elif age >= 18 and age < 65:
    print("You are an adult.")
else:
    print("You are a senior citizen.")

# Loops
numbers = [1, 2, 3, 4, 5]

for number in numbers:
    print(number)

i = 0
while i < 5:
    print(i)
    i += 1

# Exception handling
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Error: Division by zero.")
finally:
    print("This block will always execute.")
```

These are the basics of Python programming. Understanding these concepts will provide a solid foundation for backend development using Django or Flask.

For more detailed information and examples, refer to the official Python documentation: [Python Documentation](https://docs.python.org/3/)