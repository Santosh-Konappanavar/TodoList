import Todo from './displayTodo.js';

const addtodo = () => {
  const form = document.getElementById('form');
  const input = document.getElementById('inputvalue');
  const datastore = JSON.parse(localStorage.getItem('mydata') || '[]');
  const todo = new Todo(datastore);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const obj = {
      description: input.value,
      completed: false,
    };
    todo.display(obj);
  });
};

export default addtodo;
