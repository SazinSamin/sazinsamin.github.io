import charts from "./js/charts.js";

const dataArr =  [31, 40, 28, 51, 42, 109, 100];


const removeMyChild = (selectedQuery) => {
        const radialChargebarH1 = document.getElementById('chargeRadialbar');
        console.log(radialChargebarH1.removeChild(radialChargebarH1.children[0]));
}


const fetchData =  async () => {
        /*
        const res = await fetch("https://localhost:3000");
        let json = await res.json();
        console.log(json);
        */




        removeMyChild("chargeRadialbar");

        charts.radialBar("0", "#chargeRadialbar");
        charts.radialBar("25", "#tempRadialbar");
        charts.radialBar("45", "#pulseRadialbar");
        charts.radialBar("95", "#oxygenRadialbar");

        charts.tempChart(dataArr, "#tempPlot");
        charts.tempChart(dataArr, "#pulsePlot");
        charts.tempChart(dataArr, "#chargePlot");
        charts.tempChart(dataArr, "#oxygenPlot");        

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








