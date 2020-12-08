import React from 'react';

const useConfirm = (msg = '', onConfirm, onCancel) => {
  if (!onConfirm && typeof onConfirm !== 'function') {
    return;
  }

  // not mandatory
  if (onCancel && typeof onCancel !== 'function') {
    return;
  }

  const confirmAction = () => {
    if (window.confirm(msg)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

const App = () => {
  const deleteWorld = () => console.log('Deleteing the World...');
  const abort = () => console.log('Aborted');
  const confirmDelete = useConfirm('Are u sure?', deleteWorld, abort);
  return (
    <div className="App">
      <h1>useConfirm😄</h1>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};

export default App;
