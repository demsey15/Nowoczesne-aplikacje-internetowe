class Task {
    private _text: string;
     _isDone: boolean;
    private _html: HTMLElement;
        pomoc : string;
    private checkBox: HTMLInputElement;

    constructor(text: string) {
        this._text = text;
        this._isDone = false;

        this.createHTMLElement();
    }

    markAsDone(): void {
        console.log('click');
        this._isDone = true;
        console.log(this._isDone);
        this.pomoc = 'X';
    }

    getText(): string {
        return this._text;
    }

    isDone(): boolean{
        return this._isDone;
    }

    private createHTMLElement() {
        let newElement = document.createElement('li');
        newElement.innerHTML = this._text;

        let checkBoxP: HTMLInputElement = <HTMLInputElement> document.createElement('input');
        checkBoxP.setAttribute('type', 'checkbox');
        checkBoxP.addEventListener('click', this.markAsDone);
        this.checkBox = checkBoxP;
        if (this._isDone) {
            console.log('isdone');
            checkBoxP.setAttribute('checked', 'true');
        }
        

        newElement.appendChild(checkBoxP);

        let removeButton: HTMLButtonElement = <HTMLButtonElement>document.createElement('button');
        let removeFun = getRemoveTask(this);
        
        removeButton.innerHTML = 'Usun';
        removeButton.addEventListener("click", removeFun);

        newElement.appendChild(removeButton);

        this._html = newElement;
    }

    getHtml(): HTMLElement {
       // this.createHTMLElement();

        return this._html;
    }
}

interface SearchTasks {
    search(query: string): Array<Task>;
}

class TaskList implements SearchTasks {
    private _element: HTMLElement;
    private _tasks: Array<Task>;

    constructor() {
        this._tasks = [];
        this._element = document.createElement('ul');
    }

    addTask(newTaskText: string): Task {
        let newTask = new Task(newTaskText);

        this._tasks.push(newTask);
        
        this._element.appendChild(newTask.getHtml());
        console.log('dodano zadanie: ', this._tasks)
        
        this.updateHtmlElement();
        return newTask;
    }

    removeTask(taskToRemove: Task): void {
        let i = this._tasks.indexOf(taskToRemove);
        this._tasks.splice(i, 1);
        console.log('Usunieto zadanie: ', this._tasks);
        this.updateHtmlElement();
    }

    getElement(): HTMLElement {
        return this._element;
    }

    search(query: string): Array<Task> {
        let foundTasks: Array<Task> = [];

        for (let i = 0; i < this._tasks.length; i++) { 
            if(query == ''){
                foundTasks.push(this._tasks[i]);
            }
            else if (this._tasks[i].getText().indexOf(query) !== -1) {
                foundTasks.push(this._tasks[i]);
            }
        }

        return foundTasks;
    }

    private updateHtmlElement(): void {
        let list = document.createElement('ul');

        for (let j = 0; j < this._tasks.length; j++) {
            list.appendChild(this._tasks[j].getHtml());
        }

        this._element = list;
    }
}

let addButton = document.getElementById('addTaskButton');
let taskList = new TaskList();

addButton.addEventListener('click', addTask);

let searchButton = document.getElementById('searchTaskButton');
searchButton.addEventListener('click', search);

 function addTask(): void {
     let nameinput: HTMLInputElement = <HTMLInputElement>document.getElementById('taskNameInput');

     taskList.addTask(nameinput.value);

     let list = document.getElementById('tasksList');

    if(list.firstChild != undefined){
         list.removeChild(list.firstChild);
    }
     list.appendChild(taskList.getElement());
 }

 function getRemoveTask(task: Task) {
     console.log('Przygotowuje funkcje usuwania dla zadania', task.getText());
     return function removeItem() :void {
         console.log('Usuwam zadanie: ', task.getText());

         taskList.removeTask(task);

         

         let list = document.getElementById('tasksList');
         list.removeChild(list.firstChild);
         list.appendChild(taskList.getElement());
     }
 }

 function search(): void {
     let queryInput: HTMLInputElement = <HTMLInputElement>document.getElementById('searchInput');
     let query = queryInput.value;

     
         let results: Array<Task> = taskList.search(query);

         let resultList = document.createElement('ol');
         console.log('Mam rezultatow:', results.length);
         for (let i = 0; i < results.length; i++) {
             let li = document.createElement('li');
             console.log(results[i]._isDone, ' ', results[i].pomoc);
            
                li.innerHTML = results[i].getText(); 
             
             resultList.appendChild(li);
         }

         let list = document.getElementById('searchTasksList');
         
         if(list.firstChild != undefined){
            list.removeChild(list.firstChild);
         }

         list.appendChild(resultList);
     
 }


