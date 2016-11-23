var Car = function(model, marka){
	this.model = model;
	this.marka = marka;
    this.wypozyczony = false;
}


modelTextElement = document.getElementById('model');
ul = document.getElementById('list');
markaSelectElement = document.getElementById('marka');

document.getElementById('button').addEventListener('click', addNewItem);


cars = [];

function addNewItem(){
    let model = modelTextElement.value;
    let marka = markaSelectElement.value;
    
    if(model.trim().length > 0){
        let newCar = new Car(model, marka);
        cars.push(newCar);
        console.log(cars.length);
        
        let li = document.createElement('tr');
        let pModel = document.createElement('td');
        let pMarka = document.createElement('td');
        
        pModel.textContent = model;
        pMarka.textContent = marka;
        
        li.appendChild(pMarka);
        li.appendChild(pModel);
        
        
        let tdRent = document.createElement('td');
        let pRent = document.createElement('p');
        pRent.textContent = 'Wypożyczony: ';
        
        tdRent.appendChild(pRent);
        let checkBox = document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        let changeRentStatusFunction = getRentCarFunction(checkBox, newCar);
        checkBox.addEventListener('click', changeRentStatusFunction);
        
        tdRent.appendChild(checkBox);
        
        li.appendChild(tdRent);
        
        let tdButton = document.createElement('td');
        let buttonRemove = document.createElement('button');
        buttonRemove.innerHTML = 'Usuń';
        buttonRemove.style.marginLeft = '5px';
        
        let removeFunction = getRemoveItemFunction(li, newCar);
        buttonRemove.addEventListener('click', removeFunction);
        
        tdButton.appendChild(buttonRemove);
        li.appendChild(tdButton);
        ul.appendChild(li);
        
        updateAvailableNumber();
    }
}

function updateAvailableNumber(){
    let availableText = document.getElementById('dostepne');
    let allText = document.getElementById('wszystkie');
    
    allText.textContent = cars.length;
    availableText.textContent = countAvailableNumber();
}

function countAvailableNumber(){
    let sum = 0;
    let i = 0;
    for(i; i <cars.length; i++){
        if(!cars[i].wypozyczony){
            sum++;
        }
    }
    
    return sum;
}

function getRemoveItemFunction(item, car){
    return function removeItem(){
        ul.removeChild(item);
        let index = cars.indexOf(car);
        if(index > -1){
            cars.splice(index, 1);
        }
        
        updateAvailableNumber();
    };
}

function getRentCarFunction(checkbox, car){
    return function chenageRentStatus(){
        car.wypozyczony = checkbox.checked;  
        
        updateAvailableNumber();
    }
}
