document.addEventListener('DOMContentLoaded', () => {
  const todoInput = document.getElementById('todoInput');
  const addTodoButton = document.getElementById('addTodoButton');
  const todoList = document.getElementById('todoList');

  const updateAddButtonState = () => {
      addTodoButton.disabled = todoInput.value.trim() === '';
  };

  todoInput.addEventListener('input', updateAddButtonState);

  const createTodoItem = (taskText) => {
      const todoItem = document.createElement('li');
      const todoCheckbox = document.createElement('input');
      todoCheckbox.type = 'checkbox';
      todoItem.textContent = taskText;

      todoCheckbox.addEventListener('change', () => {
        todoItem.style.textDecoration = todoCheckbox.checked ? 'line-through' : 'none'
      });

      todoItem.appendChild(todoCheckbox);
      todoList.appendChild(todoItem);
  };

  addTodoButton.addEventListener('click', () => {
      const taskText = todoInput.value.trim();
      if (taskText !== '') {
          createTodoItem(taskText);
          todoInput.value = '';
          updateAddButtonState();
      }
  });
});
