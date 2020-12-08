import React, { useEffect, useRef } from 'react';

const useClick = (onClick) => {
  const ref = useRef();

  useEffect(() => {
    // 변수를 안에서 참조하지 않으면 warning (ref가 unmount 시점에 null이 된다.)
    const element = ref.current;
    if (element) {
      // 'click' is keyword
      element.addEventListener('click', onClick);
    }
    // ComponentWillUnmount()
    return () => {
      if (element) {
        element.removeEventListener('click', onClick);
      }
    };
  }, [onClick]);

  return ref.current;
};

const App = () => {
  const sayHello = () => console.log('Hi minwook');
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>useClick😄</h1>
    </div>
  );
};

export default App;
