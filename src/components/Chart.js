import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Chart = ({plotData}) => {

    console.log(plotData);

    const labels = plotData[1];
    
    const options = {  
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            display: true
          },
          title: {
            display: false,
            text: 'Title',
          },
        },
    };
    
    const data = {
        labels,
        datasets: plotData[0]
    };

    return(
        <Line options={options} data={data}/>
    )
}

export default Chart;