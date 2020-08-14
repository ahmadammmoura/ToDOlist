const todos = document.querySelector('.todos')


const todoGenerator = (todo) => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `
    todos.innerHTML += html
}

const searching = (word)=>{

    Array.from(todos.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(word))
        .forEach( todo => todo.classList.add('filterd'))
    
        Array.from(todos.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(word))
        .forEach( todo => todo.classList.remove('filterd'))

}

export {todoGenerator , searching}


 