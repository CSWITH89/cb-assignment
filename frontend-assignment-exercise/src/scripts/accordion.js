const accordionToggle = (id) => {
  let selectedPanel = document.getElementsByClassName(
    `faq__container--${id}`
  )[0];
  console.log('SELECTED PANEL ', selectedPanel, ' ID ', id);
  if (selectedPanel.className.includes('show')) {
    selectedPanel.className = selectedPanel.className.replace('show', '');
  } else {
    selectedPanel.className += ' show';
  }
};
