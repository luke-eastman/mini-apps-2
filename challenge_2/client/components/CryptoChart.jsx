import React, {useEffect, useState} from 'react';
import Chart from 'chart.js';

const CryptoChart = ({prices}) => {
  const [chartRef, setChartRef] = useState(React.createRef())

  useEffect(() => {
    const cryptoChartRef = chartRef.current.getContext("2d");
    new Chart(cryptoChartRef, {
      type: "line",
      data: {
          labels: prices.dates,
          datasets: [
            {
              label: '(BTC)',
              data: prices.prices,
              lineTension: 0,
              radius: 0
            }
          ]
      },
      options: {

        scales: {
          xAxes: [{
              type: 'time',
              distribution: 'series'
          }]
        }
      }
    });
  }, [chartRef, prices]);



  return (
    <div>
      <canvas id="crypto-chart" ref={chartRef} />
    </div>

  );
};

export default CryptoChart;