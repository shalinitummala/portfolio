"use client";
import React from "react";

export default function CountComponent() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <div className="bg-white">mycount: {count}</div>
      <button
        className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        onClick={() => setCount((prev) => prev + 1)}
      >
        increment
      </button>
      <button
        className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        onClick={() => setCount((prev) => prev - 1)}
      >
        decrement
      </button>
    </div>
  );
}
