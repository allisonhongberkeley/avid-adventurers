# avid-adventurers

(1) To setup the project: 
- `git clone https://github.com/allisonhongberkeley/avid-adventurers.git`
- `cd avid-adventurers/avid-adventurers`
- `nvm use 20` (first, install node, if you haven't already) 
- `npm install`

(2) Add secret Reagant keys: 
- Open a new terminal window.
- `cd avid-adventurers/avid-adventurers`
- `touch .env`
- `vim .env`
- Press `i` to enter insert mode, and paste: REACT_APP_REAGANT_API_KEY=rg_v1_7m95qdgnyxeo6r4chhlngtuec0c7wn0hwjfz_ngk
- Press `Esc` to exit insert mode, and type `:wq` to save and quit.

(3) To run the Chat server: 
- Open a new terminal window.
- `cd src`
- `node ws-server.js` 

(4) Run the project: 
- Open a new terminal window. 
- `npm start`
- visit `localhost:3000/home`

(3) and (4) should be running simultaneously in separate windows. 

