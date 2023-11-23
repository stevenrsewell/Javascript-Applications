const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const categoryInput = document.querySelector('#category-input');
const list = document.querySelector('#todo-list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const todoText = input.value.trim();
  const categoryText = categoryInput.value.trim();
  if (todoText !== '' && categoryText !== '') {
    const todoItem = document.createElement('li');
    todoItem.classList.add('list-group-item');
    const todoContent = document.createElement('div');
    const todoSpan = document.createElement('span');
    todoSpan.textContent = todoText;
    const categorySpan = document.createElement('span');
    categorySpan.textContent = categoryText;
    categorySpan.classList.add('category'); // Adding class for category styling
    const closeButton = document.createElement('button');
    closeButton.setAttribute('type', 'button');
    closeButton.classList.add('close');
    closeButton.setAttribute('aria-label', 'Remove');
    closeButton.innerHTML = '<span aria-hidden="true">&times;</span>';

    todoContent.appendChild(todoSpan);
    todoContent.appendChild(categorySpan);
    todoContent.appendChild(closeButton);
    todoItem.appendChild(todoContent);
    list.appendChild(todoItem);

    input.value = '';
    categoryInput.value = '';
  }
});

list.addEventListener('click', (e) => {
  const target = e.target;
  if (target.tagName === 'SPAN' && !target.classList.contains('category')) {
    target.classList.toggle('completed');
  } else if (target.classList.contains('close')) {
    target.parentElement.parentElement.remove();
  }
});