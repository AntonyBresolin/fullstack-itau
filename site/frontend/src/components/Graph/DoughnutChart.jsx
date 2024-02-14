import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import UserServices from '../../services/UserServices';

const DoughnutChart = () => {
  const [participationData, setParticipationData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await UserServices.getUsers();
      const data = await result.json();
      setParticipationData(data);
    }
    fetchData();
  }, []);

  const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
  };

  const backgroundColors = participationData.map(() => generateRandomColor());


  const data = {
    labels: participationData.map(
      (user) => user.firstName + ' ' + user.lastName
    ),
    datasets: [
      {
        label: 'Dataset 1',
        data: participationData.map((user) => user.participation),
        backgroundColor: backgroundColors,
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
        labels: {
          boxHeight: 20,
          boxWidth: 20,
        },
      },
      title: {
        display: false,
        text: 'Chart.js Doughnut Chart'
      },
    },
    maintainAspectRatio: false,
  };

  return <div className='w-2/5'><Doughnut data={data} options={options} /></div>;
}

export default DoughnutChart;