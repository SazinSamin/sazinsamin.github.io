import charts from "../charts.js";
import statistics from "../utilities/stats.js"
import fetchObj from "../fetch/fetchData.js";

const dataArr = [31, 40, 29, 51, 42, 109, 100];



const statisticsHTML = async  () => {
        
        let dataArr = [];
        dataArr = await fetchObj.fetchDataAll();
        console.log(dataArr);

        let temp =  dataArr['temp'];
        let pulse = dataArr['pulse'];
        let oxygen = dataArr['oxygen'];
        let time =  dataArr['time'];


        charts.radialBar(statistics.min(pulse), "#minPulse");
        charts.radialBar(statistics.max(pulse), "#maxPulse");
        charts.radialBar(statistics.standardDeviation(pulse), "#stdPulse");
        charts.tempChart(pulse, time, "#pulsePlot");


        charts.radialBar(statistics.min(oxygen), "#minOxy");
        charts.radialBar(statistics.max(oxygen), "#maxOxy");
        charts.radialBar(statistics.standardDeviation(oxygen), "#stdOxy");
        charts.tempChart(oxygen, time, "#oxyPlot");

        charts.radialBar(statistics.min(temp), "#minTemp");
        charts.radialBar(statistics.max(temp), "#maxTemp");
        charts.radialBar(statistics.standardDeviation(temp), "#stdTemp");
        charts.tempChart(temp, time, "#tempPlot");

}

statisticsHTML();