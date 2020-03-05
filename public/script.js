// client-side js, loaded by index.html
// run by the browser each time the page is loaded

console.log("hello world :o");

// define variables that reference elements on our page
const dreamsList = document.getElementById("dreams");
const dreamsForm = document.querySelector("form");

// a helper function that creates a list item for a given dream
function appendNewDream(dream) {
  const newListItem = document.createElement("li");
  newListItem.innerText = dream;
  dreamsList.appendChild(newListItem);
}

// fetch the initial list of dreams
const fetchdata = (startt, endd) => {
  console.log("yukleniyor");
  fetch("/dreams?start=" + startt + "&end=" + endd)
    .then(response => response.json()) // parse the JSON from the server
    .then(dreams => {
      var asd = dreams;

      // console.log("cevap", asd.body);
      var statistics = asd.body.statistics;
      var datas = asd.body.intraDayTradeHistoryList;
      // console.log("hist", datas);

      //   id: 117794443
      // onemsiz  date: "2020-02-25T00:47:54.448+0300"
      // conract: "PB20022502-01"
      // price: 250
      // quantity: 20
      var cevapp = { dev: "emin:)" };

      datas.forEach(item => {
        //     console.log(item.conract)

        var tur = item.conract.substring(0, 2);
        var yil = item.conract.substring(2, 4);
        var ay = item.conract.substring(4, 6);
        var gun = item.conract.substring(6, 8);
        var saat = item.conract.substring(8, 10);
        var len = item.conract.substring(11, 13) || 1;

        if (!cevapp["20" + yil + "-" + ay + "-" + gun]) {
          cevapp["20" + yil + "-" + ay + "-" + gun] = {};
        }
        if (!cevapp["20" + yil + "-" + ay + "-" + gun][saat]) {
          cevapp["20" + yil + "-" + ay + "-" + gun][saat] = {
            tichac: 0,
            ticsayi: 0,
            tutar: 0
          };
        }
        var cop = cevapp["20" + yil + "-" + ay + "-" + gun][saat];
        // console.log(cop);
        cevapp["20" + yil + "-" + ay + "-" + gun][saat] = {
          tichac: Number(cop.tichac) + Number(item.quantity),
          ticsayi: Number(cop.ticsayi) + 1,
          tutar: Number(cop.tutar) + Number(item.price)
        };
      });

      console.log(cevapp);
        for(let i=startt;i<endd;i++){
          for(let i=0;i<25;i++){
            var hour=i;
            if(i<10) hour="0"+hour;
            
            
            
          }
          
        }
    
    
    });

};

const pulldata = () => {
  var start = document.getElementById("start").value;
  var end = document.getElementById("end").value;
  fetchdata(start, end);
};
