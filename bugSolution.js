The solution involves using `useCallback` hook to memoize the function, preventing unnecessary recreations.

```javascript
import React, { useState, useEffect, useCallback } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const handleResize = useCallback(() => {
    console.log('Window resized!');
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]); // Correct: handleResize is memoized

  return <div>Count: {count}</div>;
}

export default MyComponent;
```

By using `useCallback`, the `handleResize` function is only created once, unless its dependencies change (in this case, it has no dependencies, so it's only created once). This prevents the infinite loop or unexpected behavior.