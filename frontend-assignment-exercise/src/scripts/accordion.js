const accordionToggle = (id) => {
  // Get all questions
  // Remove all focused from classNames that are not the current
  // Get current question
  // Add focused using id

  // Get all panels
  // Remove all show from classNames that are not the current
  // Get current panel
  // Add show to panel unless it already

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
