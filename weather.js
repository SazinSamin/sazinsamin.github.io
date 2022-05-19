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
        fieldArr[2] = fieldArr[0] + 2;
    } else {
        console.log(fieldArr[2]);
        fieldArr[2] = fieldArr[0] - 2;
    }
    console.log(fieldArr[2]);

    const idArr = ['Temperature', 'Humidity', 'Heat index', 'Smoke index'];
    document.getElementById("temperature").innerHTML = fieldArr[0];
    document.getElementById("humidity").innerHTML = idArr[1] + ": " + fieldArr[1] + " %";
    document.getElementById("heat index").innerHTML = idArr[2] + ": " + fieldArr[2] + " C";
    document.getElementById("smoke index").innerHTML = idArr[3] + ": " + fieldArr[3] + " "; 


    let last_update = json['feeds'][4]['created_at'];
    console.log(last_update);
    document.getElementById("last update").innerHTML = last_update;



}   


fetchData();

