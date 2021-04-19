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
                zoom: {
                    enabled: false
                }
            },
            markers: {
                size: 5
            },
            stroke: {
                width: [2, 2]
            },
            xaxis: {
                categories: country
            }
        }
    })

    console.log(cases)

    return (
        <section>
            <Chart options={options.options} series={data.series} type="line"/>
        </section>
    )
}