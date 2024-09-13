import React, { useState, useRef } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(1);

  const handleClick = () => {
    setCount(count + 1);
  };

  renderCount.current++;

  return (
    <div>
      <h2>Clicked {count} times</h2>
      <button onClick={handleClick}>Increment</button>
      <p>This component has rendered {renderCount.current} times.</p>
    </div>
  );
}
