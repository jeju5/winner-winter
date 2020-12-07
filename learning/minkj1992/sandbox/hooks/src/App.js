import React, { useEffect, useState } from 'react';

const useTitle = (initTitle) => {
  const [title, setTitle] = useState(initTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector('title');
    htmlTitle.innerText = title;
  };

  useEffect(updateTitle, [title]);
  return setTitle;
};

const App = () => {
  const titleUpdater = useTitle('Loading...');
  setTimeout(() => titleUpdater("Leoo's Updater"), 3000);
  return (
    <div className="App">
      <h1>Hi Leoo 😄</h1>
    </div>
  );
};

export default App;
