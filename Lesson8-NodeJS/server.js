const express = require('express');
//const authRouter = require('./routers/auth');
const routers = {
  api: require('./routers/api'),
}

const app = express();

app.use('/api', routers.api);
//app.get('/', (req, res) => res.send('Hello World!')); //jeśli to odkomentjuemy, dostaniemy hello z kodu, a nie z pliku
//bo express zatrzyma się na pierwszym elemencie, ktory mu cos zwroci
app.get('/', (req, res) => res.send('Witaj w aplikacji lista ToDo!'));
//app.use(express.static(__dirname + '/public/'));

//istnieją tez:
//app.post
//app.put
//app.delete
//app.create

app.listen(8080, () => console.log('Server started on port 8080'));
