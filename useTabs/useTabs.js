export const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrnetIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrnetIndex,
  };
};
