# Promise

```javascript

fetch()
  .then(func1)
  .then(func2)
  .then(func3)
  .catch(func4)
  .finally(func5);

// STATES
// 'loading', 'success', 'error'
// 'pending', 'fulfilled', 'rejected'

const Promise = {
    success: [func1, func2, func3]
    error: [func4],
    finally: [func5],
}

Promise.success.forEach(x => x())
Promise.finally.forEach(x => x())
```
