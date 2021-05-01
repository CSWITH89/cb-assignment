const accordionToggle = (id) => {
  let selectedQuestion = document.getElementById(`accordion${id}`);
  let selectedPanel = document.getElementsByClassName(
    `faq__container--panel${id}`
  )[0];
  if (selectedPanel.className.includes('show')) {
    selectedPanel.className = selectedPanel.className.replace('show', '');
  } else {
    selectedPanel.className += ' show';
  }
  if (selectedQuestion.className.includes('focused')) {
    selectedQuestion.className = selectedQuestion.className.replace(
      'focused',
      ''
    );
  } else {
    selectedQuestion.className += ' focused';
  }
};
