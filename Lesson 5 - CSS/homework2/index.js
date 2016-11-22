textElement = document.getElementById('text');
ul = document.getElementById('list');
document.getElementById('button').addEventListener('click', addNewItem);

function addNewItem(){
    let text = textElement.value;
    console.log('Text: ' + text);
    if(text.trim().length > 0){
        let li = document.createElement('li');
        li.textContent = text;
        
        let buttonRemove = document.createElement('button');
        buttonRemove.innerHTML = '-';
        buttonRemove.style.marginLeft = '5px';
        
        let removeFunction = getRemoveItemFunction(li);
        buttonRemove.addEventListener('click', removeFunction);
        
        li.appendChild(buttonRemove);
        ul.appendChild(li);
    }
}


function getRemoveItemFunction(item){
    return function removeItem(){
        ul.removeChild(item);
    };
}



