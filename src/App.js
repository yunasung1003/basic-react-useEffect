import "./styles.css";
import React, { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [world, setWorld] = useState(0);

  useEffect(() => {
    console.log(count);
  }, [count, world]);

  useEffect(() => {
    console.log("fitst rendering");
  }, []);
  const incremet = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      Hello ~<button onClick={incremet}>Click</button>
      <button onClick={() => setWorld(world + 1)}>Click1</button>
    </div>
  );
}
