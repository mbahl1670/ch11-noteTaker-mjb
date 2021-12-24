# Note Taker - Challenge #11 in the U of MN Bootcamp

## Built With
* Node.js
* NPM Express

## Description
This is an Express server for running front end code for a note taking APP.

## Table of Contents
* [Acceptance Criteria](#acceptance-criteria)
* [Heroku Link](#heroku-link)
* [Screenshot of the Application](#screenshot-of-the-application)
* [Git Repository](#git-repository)
* [How this was accomplished](#how-this-was-accomplished)

## Acceptance Criteria
* When you open the note taker you see a landing page with a link to a note page
* If you click on the link to the notes page you go to a page with exisisting notes listed in the left-hand column
* The page will have empty fields to enter a new note title & the note's text in the right-hand column
* When a note's title & text are entered a save icon appears in the navigation at the top of the page
* When you click on the save icon, then the new note will appear in the left-hand column with the other notes
* If you click on an existing note, the note and it's text appear in the right-hand column
* If you click on the Write icon in the navigation, empty fields for a new note appear in the right-hand column

## Heroku Link
https://enigmatic-river-86935.herokuapp.com/

## Screenshot of the Application
![Screenshot (41)](https://user-images.githubusercontent.com/90292697/147370203-c01adb43-a29a-4e93-9cc6-21b0eda95b57.png)
![Screenshot (42)](https://user-images.githubusercontent.com/90292697/147370208-5a083548-7839-486e-8fd2-fc38d564630d.png)
![Screenshot (43)](https://user-images.githubusercontent.com/90292697/147370212-8584d3d4-7b5a-4eab-8585-88455427b9da.png)
![Screenshot (44)](https://user-images.githubusercontent.com/90292697/147370215-2492636f-cbf7-42c0-b672-6f3cc489e98e.png)

## Git Repository
https://github.com/mbahl1670/ch11-noteTaker-mjb

## How this was accomplished
* Installed express with npm
* Started the server.js file, wrote html-get commands for "/", "/notes", and "*".  
* Wrote API get commands for "./api/notes" to return the information in the db.json file
* Wrote the API post command that will call a createNote File
* Wrote the createNote file wich will push the newly written note into the db.json file
* Wrote the API delete command wich will call all deleteFile function, had some trouble with this (originally tried using a filter method, but had to switch to spice)
