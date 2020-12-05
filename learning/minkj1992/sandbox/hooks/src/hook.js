import { useState } from 'react';

export const useTabs = (initialTab, allTabs) => {
  const [curIdx, setCurIdx] = useState(initialTab);
  // fail fast
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    curItem: allTabs[curIdx],
    changeItem: setCurIdx,
  };
};
