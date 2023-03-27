const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const list = document.querySelector('#todo-list');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission
  const todoText = input.value.trim(); // Remove whitespace from input value
  if (todoText !== '') {
    const todoItem = document.createElement('li');
    todoItem.innerText = todoText;
    list.appendChild(todoItem);
    input.value = ''; // Clear input field
  }
});

list.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('completed');
  }
});
