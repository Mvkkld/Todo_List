var todo_input = document.getElementById("todo_input");
var add_todo_btn = document.getElementById("add_todo_btn");
var clearall_todo_btn = document.getElementById("clearall_todo_btn");
var todo_list = document.getElementById("todo_list");

add_todo_btn.addEventListener("click", function () {
  if (!todo_input.value) return alert("Enter Todo Item");
  var list_item = `<li id="list"><span>${todo_input.value}</span>
     <button id="edit_btn" onclick="edit(this)">Edit</button>
     <button id="clear_btn" onclick="deleteFun(this)">Delete</button>
     </li>`;
  todo_list.innerHTML += list_item;
  todo_input.value = "";
});

function edit(element) {
  console.log(element.previousElementSibling.innerText);
  var previousValue = element.previousElementSibling.innerText;
  var updatedValue = prompt("Edit New Value", previousValue);
  element.previousElementSibling.innerText = updatedValue;
}

function deleteFun(element) {
  element.parentElement.remove();
}
