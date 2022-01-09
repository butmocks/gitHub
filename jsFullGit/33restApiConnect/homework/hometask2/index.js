// const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';

// /* getTasksList code here */
// export const getTasksList = () => fetch(`${baseUrl}`).then(response => response.json());

// /* getTaskById code here */

// export const getTaskById = taskId =>
//   fetch(`${baseUrl}/${taskId}`).then(response => response.json());


const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks';

export const getTasksList = () => fetch(`${baseUrl}`).then(response => response.json());

export const getTaskById = taskId =>
  fetch(`${baseUrl}/${taskId}`).then(response => response.json());

// examples
getTasksList().then(tasksList => {
  console.log(tasksList); // array of the task objects - [ {'id':'1', 'done':false ... }, {'id':'2', 'done':true ... }, ...]
});

getTaskById('2').then(taskData => {
  console.log(taskData); // {'id':'2', 'done':true ... }
});