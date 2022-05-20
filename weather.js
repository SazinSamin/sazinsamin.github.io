async function fetchData() {
    const res = await fetch("https://api.thingspeak.com/channels/1737377/feeds.json?api_key=PTRM92XMF914F4SV&results=20");
    let json = await res.json();
    console.log(json);




    console.log(json['feeds']);

    let tempArr = [];
    let humidArr = [];
    let heatIdxArr = [];
    let fieldArr = [];

    

    for(let x = 1; x <= 4; x++) {

        for(let i = 0; i < 20; i++) {
            let data = json['feeds'][i];

            // console.log(data);
            let fieldVal = 'field' + x; 
            if(data[fieldVal] != null) {
                // fieldArr.push(data[fieldVal]);
                fieldArr[x - 1] = data[fieldVal];
            }
        
        }
    }

    

    if(fieldArr[1] >= 80) {
        fieldArr[2] = parseInt(fieldArr[0]) + 2;
    } else {
        console.log(fieldArr[2]);
        fieldArr[2] = parseInt(fieldArr[0]) - 2;
    }

    const idArr = ['Temperature', 'Humidity', 'Heat index', 'Smoke index'];
    document.getElementById("temperature").innerHTML = fieldArr[0];
    document.getElementById("humidity").innerHTML = idArr[1] + ": " + fieldArr[1] + " %";
    document.getElementById("heat index").innerHTML = idArr[2] + ": " + fieldArr[2] + " C";
    document.getElementById("smoke index").innerHTML = idArr[3] + ": " + fieldArr[3] + " "; 


    let last_update = json['feeds'][4]['created_at'];
    console.log(last_update);
    document.getElementById("last update").innerHTML = last_update;

    console.log(currentTime());

}   


fetchData();


function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh === 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
  }
  
