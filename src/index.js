import './index.css';
import Todo from './modules/displayTodo.js';

const todo = new Todo();

const addTodo = () => {
  const form = document.getElementById('form');
  const input = document.getElementById('inputvalue');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    todo.add(input.value);
    window.location.reload();
  });
};

const deleteTodo = (i) => {
  todo.delete(i);
  window.location.reload();
};

const editTodo = (i, descr) => {
  todo.update(i, descr);
  window.location.reload();
};

const listitems = document.getElementById('list_container');

const renderTodos = () => {
  listitems.innerHTML = '';

  todo.getAll().forEach((item) => {
    const li = document.createElement('li');
    const listitem = `
      <div id="list_check">
        <input type="checkbox" id="checkbox" />
        <p class="edit" >${item.description}</p>
        <form class="edit-form" style="display:none">
        <input type="text" name="newDescription" value="${item.description}" class="newdesc" />
      </form>
      </div>
      <button type="button" class="btn_dot">
        <span class="material-symbols-outlined">
          more_vert
        </span>
      </button>
    `;
    li.innerHTML = listitem;

    const deleteBtn = li.querySelector('.btn_dot');
    deleteBtn.addEventListener('click', () => {
      deleteTodo(item.index);
    });

    const editBtn = li.querySelector('.edit');
    const editForm = li.querySelector('.edit-form');
    editBtn.addEventListener('click', () => {
      editBtn.style.display = 'none';
      editForm.style.display = 'block';
    });
    editForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const newDescriptionInput = editForm.querySelector('input[name=newDescription]');
      const newDescription = newDescriptionInput.value;
      editTodo(item.index, newDescription);
    });

    listitems.append(li);
  });
};

renderTodos();
addTodo();
