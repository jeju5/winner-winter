import React, { useEffect, useRef } from 'react';

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;

      if (typeof duration !== 'number' || typeof delay !== 'number') {
        duration = 1;
        delay = 0;
      }
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};

const App = () => {
  const fadeInH1 = useFadeIn(1, 2);

  return (
    <div className="App">
      <h1 {...fadeInH1}>useFadeIn😄</h1>
    </div>
  );
};

export default App;
