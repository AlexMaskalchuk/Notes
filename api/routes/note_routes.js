let notes = [
  { id: "0", note: "День рождения мамы" },
  { id: "1", note: "Сходить в магазин" },
  { id: "2", note: "Тренировка" },
  { id: "3", note: "Купить подарок" },
  { id: "4", note: "Подписать обходной лист" },
  { id: "5", note: "Собеседование" },
  { id: "6", note: "Тренировка" },
  { id: "7", note: "Купить подарок" },
];
module.exports = function (app, db) {
  app.post("/notes", (req, res) => {
    const id = `f${(+new Date).toString(16)}`;;
    notes.push({ id: id, note: req.body.note });
    res.send(notes);
  });

  app.get("/notes/:id", (req, res) => {
    let note = {};
    notes.map((item) => {
      if (item.id === req.params.id) {
        note = item;
      }
    });
    res.send(note);
  });
  app.get("/notes", (req, res) => {
    res.send(notes);
  });

  app.delete("/notes/:id", (req, res) => {
    notes = notes.filter((item) => {
      return item.id !== req.params.id;
    });
    res.send(notes);
  });
  app.put("/notes/:id", (req, res) => {
    console.log(req.params.id);
    notes.map((item) => {
      if (item.id === req.params.id) {
        item.note = req.body.note;
      }
    });
    res.send(notes);
  });
};
