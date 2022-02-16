function initListener() {
  const form = document.getElementById("form");
  const input = document.getElementById("input");
  const todos = document.getElementById("todos");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const todoText = input.value;

    if (todoText) {
      const todoEl = document.createElement("li");
      todoEl.innerText = todoText;
      todos.appendChild(todoEl);

      todoEl.addEventListener("click", () => {
        todoEl.classList.toggle("complated");
      });
      todos.appendChild(todoEl);
      input.value = "";
    }
  });
}

function readToDoList() {
  initListener();
  // Read Local Storage and initializ list with createElement and co.
}
