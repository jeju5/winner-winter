import React, { useEffect, useState } from 'react';

const App = () => {
  const sayHello = () => console.log('hello');
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);
  // 1. init + every(num, num2) changed
  // useEffect(sayHello);
  // 2. only init
  // useEffect(sayHello, []);
  // 3. init + every num changed
  useEffect(sayHello, [num]);

  return (
    <div className="App">
      <button onClick={() => setNum(num + 1)}>{num}</button>
      <button onClick={() => setNum2(num2 + 1)}>{num2}</button>
    </div>
  );
};

export default App;
