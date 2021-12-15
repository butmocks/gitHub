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

const listElem = document.querySelector('.list');

const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const renderTasks = tasksList => {
  listElem.innerHTML = '';
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.id = id;
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
    done: false,
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

const handleClick = event => {
  const clickedChecbox = event.target.id;
  tasks.forEach(el => {
    if (el.id === +clickedChecbox) {
      return el.done === false ? (el.done = true) : (el.done = false);
    }
  });

  return renderTasks(tasks);
};

tasks.forEach((item, i) => {
  item.id = i++;
});

listElem.addEventListener('click', handleClick);
const createBtn = document.querySelector('.create-task-btn');
createBtn.addEventListener('click', addTask);
renderTasks(tasks);
