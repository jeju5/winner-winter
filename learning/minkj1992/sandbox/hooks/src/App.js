import React from 'react';

const usePreventLeave = (msg = '') => {
  const listener = (e) => {
    console.log(msg);
    // 표준에 따라 기본 동작 방지
    e.preventDefault();
    // Chrome에서는 returnValue 설정이 필요함
    e.returnValue = '';
  };

  const enablePrevent = () => window.addEventListener('beforeunload', listener);
  const disablePrevent = () =>
    window.removeEventListener('beforeunload', listener);

  return { enablePrevent, disablePrevent };
};

const App = () => {
  const msg = '정말 떠나시고 싶으세요? 😇'; // Chrome removed support for custom message in ver 51
  const { enablePrevent, disablePrevent } = usePreventLeave(msg);

  return (
    <div className="App">
      <h1>usePreventLeave😄</h1>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>unProtect</button>
    </div>
  );
};

export default App;
