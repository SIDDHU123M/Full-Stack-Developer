# Python Functions

In Python, functions are a fundamental building block of code organization and reusability. They allow you to encapsulate a block of code that can be called and executed multiple times with different inputs. Functions can take arguments, perform operations, and return values.

## Function Definition

A function in Python is defined using the `def` keyword followed by the function name and parentheses. You can also specify parameters inside the parentheses if the function requires input values.

```python
def greet(name):
    print(f"Hello, {name}!")

def add_numbers(a, b):
    return a + b
```

## Function Invocation

To invoke or call a function, you simply use the function name followed by parentheses. If the function has parameters, you pass the required values inside the parentheses.

```python
greet("Alice")  # Output: Hello, Alice!

result = add_numbers(5, 3)
print(result)  # Output: 8
```

## Return Statement

Functions can return values using the `return` statement. This allows you to capture the result of a function and use it in other parts of your code.

```python
def multiply(a, b):
    return a * b

result = multiply(4, 6)
print(result)  # Output: 24
```

## Lambda Functions

Lambda functions, also known as anonymous functions, are small, single-expression functions that don't require a `def` statement. They are often used for simple operations or as arguments to higher-order functions.

```python
double = lambda x: x * 2

result = double(5)
print(result)  # Output: 10
```

## Conclusion

Understanding how to define, invoke, and return values from functions is essential for Python backend development. Functions provide a way to organize code, improve reusability, and make your code more modular and maintainable.