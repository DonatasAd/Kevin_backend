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
