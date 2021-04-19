import {useState} from "react";
import Chart from "react-apexcharts";

export default function ComponentsChart2({country, cases, death}) {

    const [data,
        usedata] = useState({
        series: [
            {
                name: "confirmed",
                data: cases
            }, {
                name: "death",
                data: death
            }
        ]
    })

    const [options,
        useOptions] = useState({
            options: {
            }
    })


    return (
        <section>
            <Chart options={options.options} series={data.series} type="bar" width={400}/>
        </section>
    )
}