import charts from "../charts.js";
import statistics from "../utilities/stats.js"


const dataArr = [31, 40, 29, 51, 42, 109, 100];

charts.radialBar(statistics.min(dataArr), "#minTemp");
charts.radialBar(statistics.max(dataArr), "#maxTemp");
charts.radialBar(statistics.standardDeviation(dataArr), "#stdTemp");
charts.tempChart(dataArr, "#tempPlot");
