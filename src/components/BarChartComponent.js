/* eslint-disable prettier/prettier */
import React from "react";
import { Bar } from "react-chartjs-2";
import { BarElement, CategoryScale, Chart, LinearScale, Title } from 'chart.js';

Chart.register(CategoryScale, BarElement, LinearScale, Title);

function BarChartComponent() {
    const data = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3, 15],
          backgroundColor: "rgba(0, 123, 255, 0.5)",
        },
      ],
    };
  
    const options = {
      maintainAspectRatio: false, // Add this line
    };
  
    return (
      <div style={{ height: "400px", width: "600px" }}> 
        <Bar data={data} options={options} />
      </div>
    );
  }
  

export default BarChartComponent;
