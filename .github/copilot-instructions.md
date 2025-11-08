# AI Coding Assistant Instructions

This repository contains a collection of coding problem solutions implemented in JavaScript and Python. Here's what you need to know to work effectively with this codebase:

## Project Structure

- Root directory contains standalone algorithmic problems
- `sliding_window/` contains specialized sliding window technique implementations
- Problems are implemented in either JavaScript (`.js`) or Python (`.py`)

## Code Organization Patterns

1. **JavaScript Solutions**:
   - Class-based implementations use `class Solution` or `class Soluation` pattern
   - Standalone problems use function declarations
   - Test cases are included at the bottom of each file
   - Example: See `sliding_window/sum.js` for class structure

2. **Python Solutions**:
   - Implemented as standalone functions
   - Function parameters clearly define input types
   - Test cases included at the bottom
   - Example: See `prefix_sum.py`

## Common Implementation Patterns

1. **Sliding Window Pattern** (`sliding_window/`):
   - Uses `left` and `right` pointers for window manipulation
   - Window size may be fixed (`max_sum.js`) or variable (`nonRepeatingSubString.js`)
   - Common variable names: `l/r` or `left/right` for pointers

2. **Array Manipulation**:
   - Use built-in methods like `slice()`, `reduce()`, `filter()`
   - Array reversal uses two-pointer technique
   - Example: See `reverseWords.js`

3. **Number Processing**:
   - Use `Math.floor()` for integer division
   - `parseInt()` for string to number conversion
   - Example: See `sumOfDigit.js`

## Best Practices

1. **Solution Documentation**:
   - Include problem statement in comments
   - Document key algorithm concepts used
   - Add example inputs/outputs in comments

2. **Variable Naming**:
   - Use descriptive names for primary variables (e.g., `maxSumValue`, `targetSum`)
   - Common abbreviations: `l/r` for left/right, `acc` for accumulator

3. **Testing**:
   - Include test cases at the bottom of each file
   - Use `console.log()` for output verification
   - Comment out alternative solutions when present

## Key Files for Reference

- `sliding_window/sum.js`: Class-based solution template
- `permutation.js`: Recursion and backtracking example
- `nonRepeatingSubString.js`: Sliding window with hash map
- `sumOfDigit.js`: Multiple solution approaches example