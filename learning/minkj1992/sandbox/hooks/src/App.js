import React from 'react';
import { useTabs } from './hook';

const content = [
  {
    tab: 'Section 1',
    content: 'This is the content of the Section 1',
  },
  {
    tab: 'Section 2',
    content: 'This is the content of the Section 2',
  },
];

const App = () => {
  const { curItem, changeItem } = useTabs(0, content);

  return (
    <div className="App">
      <h1>UseTabs</h1>
      {content.map((section, idx) => (
        <button onClick={() => changeItem(idx)}>{section.tab}</button>
      ))}
      <div>{curItem.content}</div>
    </div>
  );
};

export default App;
