# python-exception-handling.py

def divide_numbers(a, b):
    try:
        result = a / b
    except ZeroDivisionError:
        print("Error: Division by zero is not allowed.")
        return None
    except TypeError:
        print("Error: Both arguments must be numbers.")
        return None
    else:
        return result
    finally:
        print("Execution of divide_numbers is complete.")

# Test cases
print(divide_numbers(10, 2))  # Should print 5.0
print(divide_numbers(10, 0))  # Should print an error message
print(divide_numbers(10, 'a'))  # Should print an error message