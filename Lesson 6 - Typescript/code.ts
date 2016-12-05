class Task {
    private _text: string;
    private _isDone: boolean;
    private _html: HTMLElement;

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
        this.checkBox.setAttribute('checked', 'true');
    }

    getText(): string {
        return this._text;
    }


    private createHTMLElement() {
        let newElement = document.createElement('li');
        newElement.innerHTML = this._text;

        let checkBox: HTMLInputElement = <HTMLInputElement> document.createElement('input');
        checkBox.setAttribute('type', 'checkbox');
        checkBox.addEventListener('click', this.markAsDone);

        if (this._isDone) {
            console.log('isdone');
            checkBox.setAttribute('checked', 'true');
        }
        this.checkBox = checkBox;

        newElement.appendChild(checkBox);

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

        return newTask;
    }

    removeTask(taskToRemove: Task): void {
        let i = this._tasks.indexOf(taskToRemove);
        this._tasks.splice(i, 1);

        this.updateHtmlElement();
    }

    getElement(): HTMLElement {
        return this._element;
    }

    search(query: string): Array<Task> {
        let foundTasks: Array<Task> = [];

        for (let i = 0; i < this._tasks.length; i++) {
            let task: Task = this._tasks[i];
            
            if (task.getText().indexOf(query) !== -1) {
                foundTasks.push(task);
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

     list.removeChild(list.firstChild);
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

     if (query !== '') {
         let results: Array<Task> = taskList.search(query);

         let resultList = document.createElement('ul');
         console.log('Mam rezultatow:', results.length);
         for (let i = 0; i < results.length; i++) {
             resultList.appendChild(results[i].getHtml());
         }

         let list = document.getElementById('tasksList');
         list.removeChild(list.firstChild);
         list.appendChild(resultList);
     } else {
         let list = document.getElementById('tasksList');
         list.removeChild(list.firstChild);
         list.appendChild(taskList.getElement());
     }
 }


