import charts from "./js/charts.js";

const dataArr =  [31, 40, 28, 51, 42, 109, 100];





const fetchData =  async () => {
        // const res = await fetch("https://prosthetic.herokuapp.com/");
        // let json = await res.json();
        // console.log(json);
        // document.getElementById('chargeSpan').innerHTML = "60";
        // document.getElementById('tempSpan').innerHTML = "37.2";
        // document.getElementById('pulseSpan').innerHTML = "75";
        // document.getElementById('oxySpan').innerHTML = "95";



        charts.radialBar("5", "#chargeRadialbar");
        charts.radialBar("25", "#tempRadialbar");
        charts.radialBar("45", "#pulseRadialbar");
        charts.radialBar("95", "#oxygenRadialbar");

        charts.tempChart(dataArr, "#pulsePlot");
        charts.tempChart(dataArr, "#tempPlot");
        charts.tempChart(dataArr, "#chargePlot");
        charts.tempChart(dataArr, "#oxygenPlot");        

}






fetchData();









