import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>Add one</button>
      <div role="contentinfo">Count is {count}</div>
    </div>
  );
};
export default Counter;
