# Note Taker Starter Code

This is an appliction for taking notes that consists of a server, a json file and 2 html pages.
Server.js file has all the routes added.
First, the user opens the webpage called note taker then once clicks on get started. Once he clicks, a fetch GET call is made 
that is caught by express and sends a file(html) that takes the user to another html page 

This html page appears that allows the user to enter a title for the note and text for the note. 

Then the user enters title of the note and note text(ToDo). Once both fields do have text,
the save button appears. 

Once save button is clicked, a fetch POST call is made and is caught by express post route that take the new note, the title and generates an id then converts the 3 to js object and at the same time, checks if there are any notes available in the notes.json file then converts it to js object and add the new note as a new object then change all the notes to json file to be stored again in the notes.json

A default route is created for any other traffic. This route directs the user to the index.html page(start page of the application).


