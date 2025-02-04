# React useEffect Memory Leak with setInterval

This repository demonstrates a common bug in React applications: memory leaks caused by improper use of `setInterval` within the `useEffect` hook.

The `bug.js` file contains the buggy code.  The `setInterval` function is used without a cleanup function to clear the interval when the component unmounts. This results in a memory leak because the interval continues to run even after the component is removed from the DOM.

The `bugSolution.js` file provides a corrected version of the code, which includes a cleanup function to properly clear the interval and prevent memory leaks.

## How to reproduce the bug

1. Clone the repository
2. Run `npm install`
3. Run `npm start`
4. Observe that the counter continues to increment even after unmounting the component. The memory usage will eventually grow indefinitely. (The actual memory leak may not be immediately noticeable but can be detected with memory profiling tools)

## How to fix the bug

Refer to `bugSolution.js` for the corrected code. The solution involves adding a return statement inside the `useEffect` hook that calls `clearInterval` with the interval ID.  This ensures the interval is cleared when the component unmounts.