const body = document.getElementsByTagName('body')[0]
const button = document.createElement('button')

colorMode()
function colorMode() {
    body.style.backgroundColor = 'lightgray'
    body.style.color = 'black'
    
}
const todoForm = document.getElementById('todo-form')
todoForm.addEventListener('submit' , function (event) {
    event.preventDefault()
    const title = document.getElementById('todo-title').value
    const description = document.getElementById('todo-desc').value
    handleToDoData(title, description)
    todoForm.reset()
    
})

const todoContainer = document.querySelector('#todo-container')
todoContainer.className = 'todo-container'
todoContainer.style.flexWarp = 'wrap'
todoContainer.style.display = 'flex'
todoContainer.style.button = '10px'




function itemData(){
    return document.querySelector('#todo-field').value.toLowerCase()
}



function handleToDoData(title, description){
  const todoList = document.getElementById('todoList')
  const todoItem = document.createElement('div')
  todoItem.className = 'todo-item'
  todoItem.innerHTML = `<h3>${title}</h3>${description}`
  todoList.appendChild(todoItem)
  todoItem.addEventListener('click', function() {
    if (todoItem.classList.contains('done')) {
        todoList.removeChild(todoItem)
    }else {
        todoItem.classList.add('done')
    }
  })
}


