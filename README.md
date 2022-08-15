# Note Taker Starter Code

This is an appliction for taking notes that consists of a server, a json file and 2 html pages.
Server.js file has all the routes added.
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column

In depth:-
First, the user opens the webpage called note taker then once clicks on get started. Once he clicks, a fetch GET call is made 
that is caught by express and sends a file(html) that takes the user to another html page 

This html page appears that allows the user to enter a title for the note and text for the note. 

Then the user enters title of the note and note text(ToDo). Once both fields do have text,
the save button appears. 

Once save button is clicked, a fetch POST call is made and is caught by express post route that take the new note, the title and generates an id then converts the 3 to js object and at the same time, checks if there are any notes available in the notes.json file then converts it to js object and add the new note as a new object then change all the notes to json file to be stored again in the notes.json

A default route is created for any other traffic. This route directs the user to the index.html page(start page of the application).


