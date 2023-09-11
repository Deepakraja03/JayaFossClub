import React, { useState, useEffect } from "react";

interface CounterProps {
  endValue: number;
  label: string;
}

const Counter: React.FC<CounterProps> = ({ endValue, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < endValue) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, 50); // Adjust the interval speed as needed

    return () => {
      clearInterval(interval);
    };
  }, [count, endValue]);

  return (
    <div>
      <p>{count.toLocaleString()}+</p>
      <p className="text-xl font-bold text-gray-500 pt-2">{label}</p>
    </div>
  );
};

export default Counter;
