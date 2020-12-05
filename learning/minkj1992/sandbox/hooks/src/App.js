import React from 'react';
import { useInput } from './hook';

const App = () => {
  const validator = (value) => !value.includes('@'); // validation condition, you can change this
  const name = useInput('Mr.', validator);

  return (
    <div className="App">
      <h1>UseInput</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};

export default App;
