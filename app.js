function onReady(){
  let toDos = [];

  const ADD_TODO_FORM = document.getElementById('addToDoForm');
  const NEW_TODO_TEXT = document.getElementById('newToDoText');
  const TODO_LIST = document.getElementById('toDoList');

  ADD_TODO_FORM.addEventListener('submit', (event) => {
    event.preventDefault();

    let title = NEW_TODO_TEXT.value;

    let newLi = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener('click', function(event){
      let buttonLiText = this.parentElement.childNodes[0].textContent;
      TODO_LIST.removeChild(this.parentElement);

function createNewToDo() {
  const newToDoText = document.getElementById('newToDoText');
  if (!newToDoText.value) { return; }
  toDos.push({
      title: newToDoText.value,
      complete: false
    });


      toDos.forEach(function(currentToDo, index){

        if(currentToDo === buttonLiText){
          toDos.splice(index, 1);
        }
        console.log(toDos);
      });
    })

    newLi.textContent = title;
    newLi.appendChild(checkbox);
    newLi.appendChild(deleteBtn);
    TODO_LIST.appendChild(newLi);
    NEW_TODO_TEXT.value = "";
  });
};

window.onload = function() {
  onReady();
};
