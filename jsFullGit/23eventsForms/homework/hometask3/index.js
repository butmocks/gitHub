// algo
// 1. вібираем класс для создания
// 2. создаём список с классом чперез метод МАП
// 3. добавляем класс к элементу
// 4. присваиваем элементам КЛАСС и ЧЕКСБОКС
// 5. присваиваем Чексбоксам атрибуты ТИП ЧЕКЕД, после чего он будет применять ЧЕКЕТ в случае свойства ДАН
// 6. добавляем в список ЧЕКБОКС и ТЕКСТ
// 7. обносляем список вставляя в ЛИСТ новые элементы

// 8. присваиваем изменение значение чекбокса при нажатии на эелемент
// 9. присваиваем КРИЕЙТ создание заданий, но только если поле не пустое
// 10. обновляем список с новым АЙДИ

const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');
listElem.innerHTML = '';
tasks.forEach((item, i) => {
  item.id = i++;
});


const renderTasks = tasksList => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};




const addTask = () => {
  const inputElem = document.querySelector('.task-input');
  const newTask = {
    text: inputElem.value,
    dome: false,
  };
  if (inputElem.value === '') {
    return;
  }
  tasks.push(newTask);
  tasks.forEach((item, i) => {
    item.id = i++;
  });
  renderTasks(tasks);
  inputElem.value = '';
};

const createBtn = document.querySelector('.create-task-btn');
createBtn.addEventListener('click', addTask);

const handleClick = event => {
  const checkedCheckbox = event.target.id;
  tasks.forEach(el => {
    if (el.id === checkedCheckbox) {
      return el.done === false ? (el.done = true) : (el.done = false);
    }
  });

  return renderTasks(tasks);
};

listElem.addEventListener('click', handleClick);

renderTasks(tasks);

// const inputAdd = document.querySelector('.task-input');

// const createBtn = document.querySelector('.btn');
// createBtn.addEventListener('click', createTask);

// function createTask(event) {
//   const input = document.querySelector('.task-input');
//   if (!input.value)
//   return;
//   tasks.push({
//     text: input.value,
//     done: false,
//     id: `${tasks.length + 1}`,
//   });
//   input.value = '';
//   renderTasks(tasks);
// }

// listElem.addEventListener('click', updateTask);

// function updateTask(event) {
//   const classes = event.target.classList;
//   const checkbox = event.target;
//   if (!classes.contains('list__item-checkbox')) return;
//   const task = tasks.find(task => task.id === event.target.dataset.taskId);
//   task.done = checkbox.checked;
//   renderTasks(tasks);
// }
// renderTasks(tasks);
