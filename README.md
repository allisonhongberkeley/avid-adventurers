# avid-adventurers

To setup the project: 
- `git clone https://github.com/allisonhongberkeley/avid-adventurers.git`
- `nvm use 20` (first, install node, if you haven't already) 
- `cd avid-adventurers/avid-adventurers`
- `npm install`

Add secret Reagant keys: 
- Open a new terminal window.
- `cd avid-adventurers/avid-adventurers`
- `touch .env`
- `vim .env`
- Press `i` to enter insert mode, and paste: REACT_APP_REAGANT_API_KEY=rg_v1_7m95qdgnyxeo6r4chhlngtuec0c7wn0hwjfz_ngk
- Press `Esc` to exit insert mode, and type `:wq` to save and quit.

To run the Chat server: 
- Open a new terminal window.
- `cd src`
- `node ws-server.js` 

Run the project: 
- Open a new terminal window. 
- `npm start`
- visit `localhost:3000/home`

