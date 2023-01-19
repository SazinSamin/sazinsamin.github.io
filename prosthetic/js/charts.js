const charts = {};

charts.tempChart = async (dataArr, timeArr, queryPlot) => {
        const chartSize = `${window.innerHeight / 3.5}px`;
        var options = {
                series: [{
                        name: 'Series 1',
                        data: dataArr.length != 0 ? dataArr : [0],
                }],
                chart: {
                        height: chartSize,
                        type: 'area',
                },
                dataLabels: {
                        enabled: true,
                        style: {
                                colors: ['#0f0f0f0f', '#E91E63', '#9C27B0']
                        }
                },
                markers: {
                        colors: ['#0f0f0f0f', '#E91E63', '#9C27B0']
                },
                fill: {
                        colors: ['#03fcad', '#E91E63', '#f54275']
                },
                stroke: {
                        curve: 'smooth'
                },
                xaxis: {
                        type: 'category',
                        // categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"],       
                        categories: timeArr,
                        labels: {
                                style: {
                                        colors: '#03fcad',
                                }
                        }
                },
                yaxis: {
                        labels: {
                                style: {
                                        colors: '#03fcad',
                                }
                        }
                },
                tooltip: {
                        x: {
                                format: 'dd/MM/yy HH:mm'
                        },
                },
        };

        
        var chart = new ApexCharts(document.querySelector(queryPlot), options);
        chart.render();
};


charts.radialBar = (val, selectedQuery) => {
        var options = {
                series: [val],
                chart: {
                        height: `${window.innerHeight / 3.5}px`,
                        type: 'radialBar',
                        toolbar: {
                                show: true
                        }
                },
                plotOptions: {
                        radialBar: {
                                startAngle: -135,
                                endAngle: 225,
                                hollow: {
                                        margin: 0,
                                        size: '70%',
                                        background: '#1B213B',
                                        image: undefined,
                                        imageOffsetX: 0,
                                        imageOffsetY: 0,
                                        position: 'front',
                                        dropShadow: {
                                                enabled: true,
                                                top: 3,
                                                left: 0,
                                                blur: 4,
                                                opacity: 0.24
                                        }
                                },
                                track: {
                                        background: val > 15 ? '#fff' : '#eb3461',
                                        strokeWidth: '67%',
                                        margin: 0, // margin is in pixels
                                        dropShadow: {
                                                enabled: true,
                                                top: -3,
                                                left: 0,
                                                blur: 4,
                                                opacity: 0.35
                                        }
                                },

                                dataLabels: {
                                        show: true,
                                        name: {
                                                offsetY: -10,
                                                show: false,
                                                color: '#888',
                                                fontSize: '17px'
                                        },

                                        value: {
                                                formatter: function (val) {
                                                        return parseInt(val);
                                                },
                                                color: 'white',
                                                fontSize: '450%',
                                                show: true,
                                        }
                                }
                        }
                },
                fill: {
                        type: 'gradient',
                        gradient: {
                                shade: 'dark',
                                type: 'horizontal',
                                shadeIntensity: 0.5,
                                gradientToColors: ['#ABE5A1'],
                                inverseColors: true,
                                opacityFrom: 1,
                                opacityTo: 1,
                                stops: [0, 100]
                        }
                },
                stroke: {
                        lineCap: 'round'
                },
                labels: ['Charge'],
        };

        var chart = new ApexCharts(document.querySelector(selectedQuery), options);
        chart.render();
}

export default charts;