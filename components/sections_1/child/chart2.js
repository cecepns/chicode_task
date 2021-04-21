import {useState} from "react";
import Chart from "react-apexcharts";

export default function ComponentsChart2({country, cases, death}) {

    const [data,
        usedata] = useState({
        series: [
            {
                name: 'PRODUCT A',
                data: [
                    44,
                    55,
                    41,
                    67,
                    22,
                    43,
                    21,
                    49
                ]
            }, {
                name: 'PRODUCT B',
                data: [
                    13,
                    23,
                    20,
                    8,
                    13,
                    27,
                    23,
                    12
                ]
            }
        ]
    })

    const [options,
        useOptions] = useState({
        options: {
            chart: {
                type: 'bar',
                height: 150,
                width: 200,
                stacked: true,
                stackType: '100%',
                toolbar: {
                    show: false 
                }
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 300
                        }
                    }
                }
            ],
            grid: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {

                labels: {
                    show: false
                },
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                }
            },
            yaxis: {
                labels: {
                    show: false
                }
            },
            fill: {
                colors: [
                    '#ffffff9a', '#ffffffd3'
                ],
                opacity: 1
            },

            legend: {
                show: false
            },

            tooltip: {
                enabled: true,
                enabledOnSeries: true,
                shared: true,
                intersect: false,
                fillSeriesColor: true,
                theme: true,
                
                style: {
                  fontSize: '12px',
                  colors : 'black',
                  fontFamily: undefined
                },
               
            }

            
        }
    })

    return (
        <section>
            <Chart
                options={options.options}
                series={data.series}
                type="bar"
                width={275}
                height={150}/>
        </section>
    )
}