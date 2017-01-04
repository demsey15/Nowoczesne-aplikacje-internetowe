var express = require('express');
var router = express.Router();

var tasks = [];

router.get('/tasks', (req, res, next) => {
  res.json(tasks);
});

router.post('/task', (req, res, next) => {
  let task = req.query.task;
  if(task !== undefined){
    tasks.push(task);
    res.send("Dodano zadanie: " + task);
  }
});

router.delete('/task/:index', (req, res, next) => {
  let index = req.params.index;
  if(index !== undefined && index >= 0 && index < tasks.length){
    tasks.splice(index, 1);
    res.send('Usunięto zadanie nr: ' + index);
  }else{
    res.send('Brak zadania o podanym indeksie');
  }
});

module.exports = router;
