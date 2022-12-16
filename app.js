let form = document.querySelector("#todo-from");
let input = document.querySelector("#todo");
let todos = document.querySelector("#todos");
let clearTodos = document.querySelector("#clear-todos");
let tasks2 = [];
document.addEventListener("DOMContentLoaded", () => {
  tasks2 = JSON.parse(localStorage.getItem("tasks")) || [];
  qush();
});
function qush() {
  if (tasks2.length > 0) {
    tasks2.forEach((task) => {
      todos.innerHTML += `<li data-todo-id="${task.id}" class="capitalize my-8 text-4xl flex justify-between">
    <input type="checkbox" id="${task.id}" class="hidden" />
    <span class="todo" >${task.task}</span>
    <span class="actions flex w-36 justify-end gap-4">
      <button class="text-green-600 complete-todo">
        <label for="${task.id}"><i class="fa-regular fa-circle-check"></i></label>
      </button>
      <button class="text-sky-500" onclick="editTodo(${task.id})">
        <i class="fa-regular fa-pen-to-square"></i>
      </button>
      <button onclick="deleteTodo(${task.id})" class="text-red-500">
        <i class="fa-regular fa-circle-xmark"></i>
      </button>
    </span>
  </li>`;
    });
  }
  localStorage.setItem("tasks", JSON.stringify(tasks2));
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  olish();
  function olish() {
    let task = input.value;
    let taskObj = {
      task,
      id: Date.now(),
    };
    tasks2 = [...tasks2, taskObj];
    qush();
    input.value = "";
  }

  //  let server = localStorage.setItem(`${date}`,`${todo}`);
  if (!todo) {
    return alert("Pustoy mumkinmas");
  }

  let template = ``;

  e.target.reset();
});

clearTodos.addEventListener("click", () => {
  todos.innerHTML = "";
});

function deleteTodo(id) {
  let todo = document.querySelector(`[data-todo-id="${id}"]`);
  todo.remove();
}

function editTodo(id) {
  let todo = document.querySelector(`[data-todo-id="${id}"]`);
  let span = todo.querySelector("span.todo");
  let actions = todo.querySelector(".actions");
  let todoName = span.textContent;

  let input = document.createElement("textarea");
  input.value = todoName;
  input.className = "bg-transparent text-gray-300 capitalize block w-full";

  span.remove();

  todo.insertBefore(input, actions);
  input.focus();

  input.addEventListener("blur", (e) => {
    let span = document.createElement("span");
    span.className = "todo";
    span.textContent = e.target.value;

    e.target.remove();
    todo.insertBefore(span, actions);
  });
}
