import charts from "./js/charts.js";
import fetchObj from "./js/fetch/fetchData.js";

// const dataArr =  [31, 40, 28, 51, 42, 109, 100];


const removeMyChild = (selectedQuery) => {
        const radialChargebarH1 = document.getElementById('chargeRadialbar');
        console.log(radialChargebarH1.removeChild(radialChargebarH1.children[0]));
}


const fetchData =  async () => {

        // const res = await fetch("http://localhost:3000/last");
        // let json = await res.json();
        let data = [];
        // data = preprocessing.makeArrayofData(json);
        data = await fetchObj.fetchDataLast10();
        // console.log(data['time']);

        // removeMyChild("chargeRadialbar");

        charts.radialBar("3", "#chargeRadialbar");
        charts.radialBar(data['temp'][data['temp'].length - 1], "#tempRadialbar");
        charts.radialBar(data['pulse'][data['pulse'].length - 1], "#pulseRadialbar");
        charts.radialBar(data['oxygen'][data['oxygen'].length - 1], "#oxygenRadialbar");

        charts.tempChart(data['temp'], data['time'], "#tempPlot");
        charts.tempChart(data['pulse'], data['time'], "#pulsePlot");
        charts.tempChart(data['oxygen'], data['time'], "#oxygenPlot");        
        // charts.tempChart(dataArr, "#chargePlot");        


        let lastUpdate = document.getElementById('last_update');
        lastUpdate.innerHTML = `Last date fetched from database at: ${new Date().toUTCString()}`;

        
}


fetchData();




function currentTime() {
        let date = new Date();
        let hh = date.getHours();
        let mm = date.getMinutes();
        let ss = date.getSeconds();
        let session = "AM";

        if (hh === 0) {
                hh = 12;
        }
        if (hh > 12) {
                hh = hh - 12;
                session = "PM";
        }

        hh = (hh < 10) ? "0" + hh : hh;
        mm = (mm < 10) ? "0" + mm : mm;
        ss = (ss < 10) ? "0" + ss : ss;

        let time = hh + ":" + mm + ":" + ss + " " + session;

        document.getElementById("clock").innerText = time;
        let t = setTimeout(function () { 
                        currentTime()
        }, 1000);
}

currentTime();








