const messages = ["Hello there.", "I'm sorry, I cannot take any requests at this time.", "I can tell you how to do that."];

function getRandomMessage(){
  const randomNum = Math.floor(Math.random() * messages.length);
  return messages[randomNum];
}

const express = require('express');
const app = express();


const port = 8887;
app.listen(port, () => {
  console.log(`listenin' on port ${port}`)
})

app.get('/', (req, res) => {
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send(JSON.stringify( {message: getRandomMessage()} ));
})
