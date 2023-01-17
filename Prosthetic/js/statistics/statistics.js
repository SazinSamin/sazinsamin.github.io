import charts from "../charts.js";
import statistics from "../utilities/stats.js"


const dataArr = [31, 40, 29, 51, 42, 109, 100];

charts.radialBar(statistics.min(dataArr), "#minTemp");
charts.radialBar(statistics.max(dataArr), "#maxTemp");
charts.radialBar(statistics.standardDeviation(dataArr), "#stdTemp");
charts.tempChart(dataArr, "#tempPlot");



charts.radialBar(statistics.min(dataArr), "#minPulse");
charts.radialBar(statistics.max(dataArr), "#maxPulse");
charts.radialBar(statistics.standardDeviation(dataArr), "#stdPulse");
charts.tempChart(dataArr, "#pulsePlot");


charts.radialBar(statistics.min(dataArr), "#minOxy");
charts.radialBar(statistics.max(dataArr), "#maxOxy");
charts.radialBar(statistics.standardDeviation(dataArr), "#stdOxy");
charts.tempChart(dataArr, "#oxyPlot");
