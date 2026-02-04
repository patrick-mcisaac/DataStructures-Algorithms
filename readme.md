# Growth Rate Plotter

A visual tool for understanding algorithm time complexity by plotting actual runtime measurements against theoretical expectations.

## Overview

An interactive way for students to develop intuition about how code performance scales with input size:

- Implementing algorithm functions with different time complexities
- Measuring actual runtime performance
- Comparing results against theoretical growth curves
- Analyzing trends with linear regression (where appropriate)

## How to Use

1. **Open the HTML file** in a web browser: `index.html`
2. **Implement the TODO functions** in the JavaScript code
3. **Refresh the page** to see your implementations plotted
4. **Compare your results** to the dotted guideline curves

## What You Need to Implement

The file contains 3 functions with TODO comments that you need to complete:

### 1. Constant Time - O(1)

```javascript
function constantTime(n) {
	// TODO: Implement constant time logic
}
```

**Goal**: Your implementation should take the same amount of time regardless of input size `n`. The plot should appear as a flat horizontal line similar to the dotted "Target: Flat" guideline.

**Examples of O(1) operations**:

- Accessing an array element by index
- Simple arithmetic operations
- Variable assignments

### 2. Linear Time - O(n)

```javascript
function linearTime(n) {
	// TODO: Implement linear time logic
	// Example: iterate through array once
}
```

**Goal**: Your implementation should scale linearly with input size `n`. The plot should show an upward trend similar to the dotted "Target: Linear" guideline.

**Examples of O(n) operations**:

- Single loop through an array
- Linear search
- Finding min/max in unsorted array

### 3. Quadratic Time - O(n²)

```javascript
function quadraticTime(n) {
	// TODO: Implement quadratic time logic
}
```

**Goal**: Your implementation should scale quadratically with input size `n`. The plot should show exponential growth similar to the dotted "Target: Quadratic" guideline.

**Examples of O(n²) operations**:

- Nested loops over the same data
- Comparing every pair of elements

## Understanding the Visualization

Each chart displays:

- **Colored line** (green/blue/red): Your actual measured runtime
- **Red line** (for O(1) and O(n) only): Linear regression trend line
- **Dotted gray line**: Theoretical target curve for comparison

### Key Learning Points

1. **Shape Matters**: Your plot should follow the same general shape as the dotted guideline
2. **Noise is Normal**: Real measurements will have variations due to system performance
3. **Median Smoothing**: The tool runs each function multiple times and uses median values to reduce noise
4. **Regression Analysis**: Linear regression helps identify trends in constant and linear functions

## Important Disclaimer

**Performance measurements are affected by many system factors and should be interpreted as educational approximations, not precise benchmarks.**

### Factors That Affect Measurements:

- **CPU Performance**: Faster processors will show smaller absolute times but similar relative growth patterns
- **Available Memory**: Low memory can cause garbage collection pauses and irregular timing
- **Operating System**: Background processes, system load, and OS scheduling affect measurements
- **Browser Engine**: Different JavaScript engines (V8, SpiderMonkey, etc.) have varying optimization strategies
- **Browser State**: Open tabs, extensions, and browser cache can impact performance
- **System Load**: Other running applications compete for CPU and memory resources
- **Power Management**: Laptops may throttle CPU speed to save battery, affecting consistency
- **JavaScript Optimizations**: Modern engines perform just-in-time compilation and optimization that can skew results

### What This Means:

- **Focus on Shape, Not Scale**: The growth pattern (flat, linear, quadratic) is more important than exact timing values
- **Relative Comparison**: Compare how your functions scale relative to each other, not absolute performance
- **Educational Purpose**: This tool demonstrates complexity concepts, not production performance analysis
- **Expect Variation**: Results will differ between systems, browsers, and runs - this is normal and expected

### Best Practices:

- Close unnecessary browser tabs and applications before testing
- Run the visualization multiple times to see consistent patterns
- Focus on the overall trend rather than individual data points
- Remember that the median filtering helps reduce but doesn't eliminate system noise

## Common Issues

- **Flat lines everywhere**: Your functions might be too simple/fast - add more computational work
- **Erratic spikes**: Normal for real measurements - the median filtering helps smooth these out
- **Wrong shape**: Review your algorithm logic and ensure it matches the expected complexity

## Educational Goals

By completing this exercise, you will:

- Understand how theoretical growth rates relates to real code performance
- See the difference between constant, linear, and quadratic growth
- Recognize complexity patterns in actual code
