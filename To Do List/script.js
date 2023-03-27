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
    todoItem.innerHTML = `
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <span class="mr-2">${todoText}</span>
          <span class="badge badge-primary badge-pill">${categoryText}</span>
        </div>
        <button type="button" class="close" aria-label="Remove">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    `;
    list.appendChild(todoItem);
    input.value = '';
    categoryInput.value = '';
  }
});

list.addEventListener('click', (e) => {
  if (e.target.classList.contains('close')) {
    e.target.parentElement.parentElement.remove();
  } else if (e.target.tagName === 'SPAN' && !e.target.classList.contains('badge')) {
    e.target.classList.toggle('completed');
  }
});
