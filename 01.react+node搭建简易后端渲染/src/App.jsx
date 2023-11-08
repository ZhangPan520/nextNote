// 这里一定要引入 不然会发生报错
import React from "react";
import { useState } from "react";
export default function App() {
  const [cout, setCount] = useState(20);
  return (
    <>
      <p>点击了{cout}次</p>
      <button onClick={() => setCount((cout) => cout + 1)}>+1次</button>
    </>
  );
}
