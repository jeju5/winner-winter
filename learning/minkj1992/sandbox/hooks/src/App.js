import React, { useEffect } from 'react';

const useBeforeLeave = (onBefore) => {
  useEffect(() => {
    const handle = ({ clientY }) => {
      if (clientY <= 0) {
        console.log(clientY);
        onBefore();
      }
    };

    if (typeof onBefore === 'function') {
      document.addEventListener('mouseleave', handle);
    }

    return () => document.removeEventListener('mouseleave', handle);
  }, [onBefore]);
};

const App = () => {
  const begForLife = () => alert("Don't Leave😇😇😇😇😇😇😇😇😇😇😇😇😇😇😇!");

  useBeforeLeave(begForLife);

  return (
    <div className="App">
      <h1>useBeforeLeave😄</h1>
    </div>
  );
};

export default App;
