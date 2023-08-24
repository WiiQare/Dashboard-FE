import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Chart } from 'primereact/chart';

interface Props {
  Data: any[];
}

const LineChart = ({ Data }: Props) => {
  const { theme } = useTheme();

  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    if (Data && Data.length > 0) {
      const countryLabels = Data.map((info) => info.country);
      const registeredValue = Data.map((info) => info.registeredCount);
      const activePayers = Data.map((info) => info.activeCount);

      const data = {
        labels: countryLabels,
        datasets: [
          {
            label: 'Registered Payers',
            data: registeredValue,
            fill: true,
            backgroundColor: 'rgba(232, 200, 37, 0.4)',
            borderColor: 'rgb(232, 200, 37)',
            tension: 0.3,
            hoverBackgroundColor: 'rgb(232, 200, 37)',
          },
          {
            label: 'Active Payers',
            data: activePayers,
            fill: true,
            backgroundColor: 'rgba(1, 236, 100, 0.4)',
            borderColor: 'rgb(1, 236, 100)',
            tension: 0.3,
            hoverBackgroundColor: 'rgb(1, 236, 100)',
          },
        ],
      };

      const options = {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        responsive: true,
        plugins: {
          legend: {
            labels: {
              color: theme === 'dark' ? 'rgb(225, 225, 225)' : undefined,
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: theme === 'dark' ? 'rgb(225, 225, 225)' : undefined,
              font: {
                size: 12,
              },
            },
            grid: {
              color: 'transparent',
            },
          },
          y: {
            ticks: {
              color: theme === 'dark' ? 'rgb(225, 225, 225)' : undefined,
              font: {
                size: 12,
              },
            },
            grid: {
              color:
                theme === 'dark'
                  ? 'rgba(222, 221, 221, 0.2)'
                  : 'rgba(0, 0, 0, 0.2)',
            },
          },
        },
      };

      setChartData(data);
      setChartOptions(options);
    }
  }, [Data, theme]);

  return (
    <Chart
      type="line"
      width="100%"
      height="100%"
      data={chartData}
      options={chartOptions}
      style={{
        fontFamily: 'inherit',
        padding: '0.5rem',
      }}
    />
  );
};

export default LineChart;
