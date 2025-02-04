```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect way to set interval, it creates a memory leak
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Missing cleanup function
    //return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```