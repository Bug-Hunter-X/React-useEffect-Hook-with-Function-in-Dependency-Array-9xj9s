# React useEffect Hook with Function in Dependency Array

This repository demonstrates a common bug in React applications involving the `useEffect` hook.  The bug arises when a function is included within the dependency array of `useEffect`. Because this function is recreated on each render, it can lead to unexpected re-renders or infinite loops.

The `bug.js` file contains the problematic code, and `bugSolution.js` provides the correct implementation.