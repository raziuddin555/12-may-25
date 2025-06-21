const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');

const output = document.querySelector('.output');

const todoList = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let task = input.value;
    todoList.push(task);

    let html = '';
    todoList.forEach(item => {
        html += `

        <li>${item}</li>
        
        `;
    });
    output.innerHTML = html;
    input.value = '';
});