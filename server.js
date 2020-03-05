// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

const axios=require("axios");

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

// send the default array of dreams to the webpage
app.get("/dreams", (request, response) => {
  
  var start=request.query.start;
  var finish=request.query.end;
  
  
  axios.get('https://seffaflik.epias.com.tr/transparency/service/market/intra-day-trade-history?endDate='+finish+'&startDate='+start).then(resp => {

    
    var sonuc=resp.data;
    var ans=sonuc.statistics;
    
    
    
    console.log();
    response.json(resp.data);
});
  // express helps us take JS objects and send them as JSON
  
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
