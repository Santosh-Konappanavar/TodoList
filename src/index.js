import './index.css';
const listitems = document.getElementById('list_container');
const arr = [
  {
    description: 'studying js to became developer',
    completed: false,
    index: 1,
  },
  {
    description: 'playing cricket to became champion',
    completed: false,
    index: 2,
  },
  {
    description: 'coocking Pizza',
    completed: false,
    index: 3,
  },
];

arr.forEach((item) => {
  const li = document.createElement('li');
  const listitem = `
  <div id="list_check">
  <input type="checkbox" id="checkbox" />
  <p>${item.description}</p>
</div>
<button type="button" id="btn_dot">
  <span class="material-symbols-outlined">
      more_vert
  </span>
</button>
  `;
  li.innerHTML = listitem;
  listitems.appendChild(li);
});
