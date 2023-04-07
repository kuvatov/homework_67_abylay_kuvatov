let container = document.getElementById('container');
let input = document.getElementById('add-item-btn');

input.addEventListener('click', function() {
    let new_element = document.createElement('div');
    new_element.className = 'hello';
    new_element.innerText = 'Привет!' + ' ';
    container.appendChild(new_element);
    let close_message = document.createElement('button');
    close_message.innerText = 'Закрыть';
    new_element.appendChild(close_message);
    close_message.addEventListener('click', function() {
        container.removeChild(new_element);
    });
    setTimeout(function() {
        /* добавил проверку, существует ли элемент перед удалением, 
        так как при удалении элемента вручную,
        timeout выдает ошибку, что такого элемента не существует */
        if (new_element.parentNode === container) {
            container.removeChild(new_element);
        };
    }, 5000);
});
