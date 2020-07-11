let notes = [
    {id: 0, note: 'sanya'},
    {id: 1, note: 'liza'},
    {id: 2, note: 'vanya'},
    {id: 3, note: 'liza'},
  ];

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send(notes);
});

router.get('/Note:id', function(req, res) {
  const note = notes.find((item)=>{
    if(item.id = req.params.id.slice(1)){
      return item;
    }
  })
  console.log(note);
  res.send(note);
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