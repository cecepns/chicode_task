import {useState} from "react";
import Chart from "react-apexcharts";

export default function ComponentsChart({country, cases, death}) {

    const [data,
        usedata] = useState({
        series: [
            {
                name: "confirmed",
                data: cases
            }
        ]
    })

    const [options,
        useOptions] = useState({
        options: {
            chart: {
                height: 350,
                type: 'line',
                toolbar: {
                    show: false
                }

            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 320
                        },
                        xaxis: {
                            labels: {
                                // show: false,
                                // show: true,
                                offsetX: 5,
                                offsetY: 0,
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
            markers: {
                size: 5
            },
            stroke: {
                width: [2, 2]
            },
            xaxis: {
                categories: country,
                labels: {
                    // show: false
                },
                position: 'bottom'
            },
            yaxis: {
                
                labels: {
                    show: true,
                }

            }
        }
    })

    return (
        <section>
            <Chart options={options.options} series={data.series} type="line"/>
        </section>
    )
}