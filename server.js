const express = require('express');
const path = require("path");
const app = express();
const PORT = 5502;
const fs = require("fs");

//for browser when user is requesting something
app.use(express.static('Develop/public'));
app.use(express.json());



app.get("/notes", (req, res, next) => res.sendFile(path.join(__dirname, "Develop/public/notes.html")));


app.post("/api/notes", (req, res, next) => {
 fs.readFile('./Develop/db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            // Convert string into JSON object
            const notes = JSON.parse(data);
            notes.push(req.body);
            fs.writeFile('./Develop/api/notes.json', JSON.stringify(notes, null, 4),
                        (writeErr) =>
                          writeErr
                            ? console.error(writeErr)
                            : console.info('Successfully added TODOs!')
                      );
                    }
                  });


            res.send(req.body);


            res.end()
        }
)

app.get('/api/notes',(req,res)=>res.sendFile(
    
    path.join(__dirname, "Develop/api/notes.json")));




app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
