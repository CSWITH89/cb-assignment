const accordionToggle = (id) => {
  let selectedPanel = document.getElementByClassName(
    `panel faq__container--${id}`
  );
  if (selectedPanel.className.includes('show')) {
    selectedPanel.className = selectedPanel.className.replace('show', '');
  } else {
    selectedPanel.className += ' show';
  }
};
