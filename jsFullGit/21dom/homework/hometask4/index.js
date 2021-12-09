function getTitle() {
  const title = document.querySelector('.title');
  return title.textContent;
}

function getDescription() {
  const about = document.querySelector('.about');
  return about.innerText;
}

function getPlans() {
  const plans = document.querySelector('.plans');
  return plans.innerHTML;
}

function getGoal() {
  const goal = document.querySelector('.goal');
  return goal.outerHTML;
}

export { getDescription, getGoal, getPlans, getTitle };
