
import {todoGenerator,searching} from './functions.js'
const todos = document.querySelector('.todos')
const form = document.querySelector('.add')
const search = document.querySelector('.search input')


form.addEventListener('submit', e => {
    e.preventDefault()

    const newTodo = form.add.value.trim()

    if(newTodo.length){
        todoGenerator(newTodo)
        form.reset()
    }else{
        alert('add todos')
    }
});

todos.addEventListener('click', e =>{

    if(e.target.tagName === 'I'){
        e.target.parentElement.remove()
    }
});

search.addEventListener('keyup', () =>{
    
    const word = search.value.toLowerCase().trim()
    searching(word)

});