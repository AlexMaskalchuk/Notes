let notes = [
    {id: 0, note: 'День рождения мамы'},
    {id: 1, note: 'Сходить в магазин'},
    {id: 2, note: 'Тренировка'},
    {id: 3, note: 'Купить подарок'},
    {id: 4, note: 'Подписать обходной лист'},
    {id: 5, note: 'Собеседование'},
    {id: 6, note: 'Тренировка'},
    {id: 7, note: 'Купить подарок'},
  ];

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send(notes);
});

router.post('/', function(req,res){
    let note = req.body.id;
    console.log(note);
    notes.push({id: req.body.id, note: req.body.note});
    console.log(notes);
    res.end('Succsess');
    
});

router.delete('/:id', function(req,res){
  console.log(req.params.id.slice(1));
  notes = notes.filter(function(note){
    return note.id !== parseInt(req.params.id.slice(1));
  });
    console.log(notes);
    res.send(notes);
});

router.put('/:id', function(req,res){
    console.log(req.body.note);
    notes = notes.map((item) => {
      if(item.id === parseInt(req.params.id.slice(1))){
          item.note = req.body.note;
      }
      return item;
    })
    console.log(notes);
    res.send(notes);
});
module.exports = router;