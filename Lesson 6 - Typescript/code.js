var Task = (function () {
    function Task(text) {
        this._text = text;
        this._isDone = false;
        this.createHTMLElement();
    }
    Task.prototype.markAsDone = function () {
        console.log('click');
        this._isDone = true;
        console.log(this._isDone);
        this.pomoc = 'X';
    };
    Task.prototype.getText = function () {
        return this._text;
    };
    Task.prototype.isDone = function () {
        return this._isDone;
    };
    Task.prototype.createHTMLElement = function () {
        var newElement = document.createElement('li');
        newElement.innerHTML = this._text;
        var checkBoxP = document.createElement('input');
        checkBoxP.setAttribute('type', 'checkbox');
        checkBoxP.addEventListener('click', this.markAsDone);
        this.checkBox = checkBoxP;
        if (this._isDone) {
            console.log('isdone');
            checkBoxP.setAttribute('checked', 'true');
        }
        newElement.appendChild(checkBoxP);
        var removeButton = document.createElement('button');
        var removeFun = getRemoveTask(this);
        removeButton.innerHTML = 'Usun';
        removeButton.addEventListener("click", removeFun);
        newElement.appendChild(removeButton);
        this._html = newElement;
    };
    Task.prototype.getHtml = function () {
        // this.createHTMLElement();
        return this._html;
    };
    return Task;
}());
var TaskList = (function () {
    function TaskList() {
        this._tasks = [];
        this._element = document.createElement('ul');
    }
    TaskList.prototype.addTask = function (newTaskText) {
        var newTask = new Task(newTaskText);
        this._tasks.push(newTask);
        this._element.appendChild(newTask.getHtml());
        console.log('dodano zadanie: ', this._tasks);
        this.updateHtmlElement();
        return newTask;
    };
    TaskList.prototype.removeTask = function (taskToRemove) {
        var i = this._tasks.indexOf(taskToRemove);
        this._tasks.splice(i, 1);
        console.log('Usunieto zadanie: ', this._tasks);
        this.updateHtmlElement();
    };
    TaskList.prototype.getElement = function () {
        return this._element;
    };
    TaskList.prototype.search = function (query) {
        var foundTasks = [];
        for (var i = 0; i < this._tasks.length; i++) {
            if (query == '') {
                foundTasks.push(this._tasks[i]);
            }
            else if (this._tasks[i].getText().indexOf(query) !== -1) {
                foundTasks.push(this._tasks[i]);
            }
        }
        return foundTasks;
    };
    TaskList.prototype.updateHtmlElement = function () {
        var list = document.createElement('ul');
        for (var j = 0; j < this._tasks.length; j++) {
            list.appendChild(this._tasks[j].getHtml());
        }
        this._element = list;
    };
    return TaskList;
}());
var addButton = document.getElementById('addTaskButton');
var taskList = new TaskList();
addButton.addEventListener('click', addTask);
var searchButton = document.getElementById('searchTaskButton');
searchButton.addEventListener('click', search);
function addTask() {
    var nameinput = document.getElementById('taskNameInput');
    taskList.addTask(nameinput.value);
    var list = document.getElementById('tasksList');
    if (list.firstChild != undefined) {
        list.removeChild(list.firstChild);
    }
    list.appendChild(taskList.getElement());
}
function getRemoveTask(task) {
    console.log('Przygotowuje funkcje usuwania dla zadania', task.getText());
    return function removeItem() {
        console.log('Usuwam zadanie: ', task.getText());
        taskList.removeTask(task);
        var list = document.getElementById('tasksList');
        list.removeChild(list.firstChild);
        list.appendChild(taskList.getElement());
    };
}
function search() {
    var queryInput = document.getElementById('searchInput');
    var query = queryInput.value;
    var results = taskList.search(query);
    var resultList = document.createElement('ol');
    console.log('Mam rezultatow:', results.length);
    for (var i = 0; i < results.length; i++) {
        var li = document.createElement('li');
        console.log(results[i]._isDone, ' ', results[i].pomoc);
        li.innerHTML = results[i].getText();
        resultList.appendChild(li);
    }
    var list = document.getElementById('searchTasksList');
    if (list.firstChild != undefined) {
        list.removeChild(list.firstChild);
    }
    list.appendChild(resultList);
}
