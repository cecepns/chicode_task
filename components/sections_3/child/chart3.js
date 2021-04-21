import {useState} from "react";
import Chart from "react-apexcharts";

export default function ComponentsChart() {

    const [data,
        usedata] = useState({
        series: [
            {
                name: 'PRODUCT A',
                data: [
                    22,
                    25,
                    41,
                    67,
                    22,
                    33,
                    21,
                    29
                ]
            }, {
                name: 'PRODUCT B',
                data: [
                    13,
                    23,
                    20,
                    8,
                    13,
                    17,
                    33,
                    2
                ]
            }
        ]
    })

    const [options,
        useOptions] = useState({
        options: {
            chart: {
                type: 'bar',
                height: 350,
                stacked: true,
                stackType: '100%',
                toolbar: {
                    show: false
                }
            },
            dataLabels: {
                enabled: false
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            // width: 200
                        },
                        xaxis: {
                            labels: {
                                show: false
                            }
                        },
                        yaxis: {
                            labels: {
                                show: false
                            }
                        }
                    }
                }
            ],
            xaxis: {
                categories: [
                    '2011 Q1',
                    '2011 Q2',
                    '2011 Q3',
                    '2011 Q4',
                    '2012 Q1',
                    '2012 Q2',
                    '2012 Q3',
                    '2012 Q4'
                ]
            },
            fill: {
                opacity: 1,

                colors: ['#2d36e0', '#3740ff']
            },
            legend: {
                show: false
            }
        }
    })

    return (
        <section>
            <Chart options={options.options} series={data.series} type="bar"/>
        </section>
    )
}