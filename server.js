const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const fs = require('fs');
const app = express();
// Helper method for generating unique ids
const uuid = require('uuid').v4;

//for browser when user is requesting something

//By default, express will look for index.html in the public folder 
app.use(express.static('Develop/public'));
app.use(express.json());


app.get("/notes", (req, res) => res.sendFile(path.join(__dirname, "Develop/public/notes.html")));


app.post("/api/notes", (req, res) => {
  fs.readFile('./Develop/api/notes.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      // Convert string into JSON object

      const notes = JSON.parse(data);

      notes.push({ text: req.body.text, title: req.body.title, id: uuid() });
      fs.writeFile('./Develop/api/notes.json', JSON.stringify(notes, null, 4),
        (writeErr) =>
          writeErr
            ? console.error(writeErr)
            : console.info('Successfully added TODOs!')
      );
    }
  });


  res.send(req.body);
  res.end();
}
)

app.get('/api/notes', (req, res) => res.sendFile(
  path.join(__dirname, "Develop/api/notes.json")));

app.get("*", (req, res) => res.sendFile(path.join(__dirname, "Develop/public/index.html")));



app.delete('/api/notes/:id', (req, res) => {
  const idDelete = req.params.id;
  fs.readFile('./Develop/api/notes.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const notes = JSON.parse(data);
      const result = notes.filter((note) => note.id !== idDelete);
      fs.writeFile('./Develop/api/notes.json', JSON.stringify(result), (writeErr) =>
        writeErr
          ? console.error(writeErr)
          : console.info('Successfully deleted TODO!'));
      res.json(`Item ${idDelete} has been deleted 🗑️`);
    }
  }
  )
})

app.listen(PORT, function (err) {
  if (err) console.log(err);
  console.log("Server listening on PORT", PORT);
});


