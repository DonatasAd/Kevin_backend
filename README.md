# Kevin_backend

DOCKER

To build project with docker:
execute command "docker build -t keving_backend ."
To run docker immage:
execute command "docker run -p 3500:3500 -d keving_backend"
To stop docker immage:
execute command "docker stop [CONTAINER ID]"

---

RUN PROJECT LOCALLY
node.js is required

---

Execute commands
"npm i"
"npm start"

---

## ROUTES

---

GET "http://localhost:3500/" - get all games returns Array with game objects

---

GET "http://localhost:3500/load-game/" - load existing single game
token required add header "Authorization": "Bearer {token}"
returns
{
"board":["X",null,null,null,null,null,null,null,null],
"lastMove":"X",
"logs":["Player X has marked position 1"],
"winner":null
}

---

GET "http://localhost:3500/start-game/" - Starts new game return object with token
{
token:token,
startingPlayer:startingPlayer
}

---

POST "http://localhost:3500/makemove/" - makes move and retuns updated game state
token required add header "Authorization": "Bearer {token}"
'Content-Type': 'application/json'

Body - {"position":1,"player":"O"}
position - takes values from range from 0-8
player - takes values "X" or "O"
returns
{
"board":["X",null,null,null,null,null,null,null,null],
"lastMove":"X",
"logs":["Player X has marked position 1"],
"winner":null
}

## Task

Program game:

_X_|___|___ 
___|_X_|___ 
___|___| X

Basic requirements: 

* Two users play a game of tick-tack-toe on the same computer 
* No real-time functionality is required 
* Single session 
* All actions are reported to the API, which saves them 
* Action log is displayed underneath the game area, read from the API 
* The game must resume completely if the browser is refreshed

What you should use: 
* Node.js
* Docker 
* Anything else you want.

Notes: 
- No need for any fancy styles. Plain and simple with the least amount of effort.
- Result of task must be a link to two Github repos, containing both frontend and API project sources and readme 
- At least one meaningful automated test present per project with framework of your choice
- Using seeds or anything else that will get you started faster is allowed and encouraged :)