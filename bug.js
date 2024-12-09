This bug occurs when using the `useEffect` hook in React with a dependency array that includes a function.  The function might be recreated on every render, leading to unexpected behavior, such as infinite loops or incorrect state updates.

```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function handleResize() {
      console.log('Window resized!');
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Incorrect: handleResize is recreated on every render

  return <div>Count: {count}</div>;
}

export default MyComponent;
```