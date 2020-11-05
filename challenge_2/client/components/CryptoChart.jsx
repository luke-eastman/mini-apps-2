import React, {useEffect, useState} from 'react';
import Chart from 'chart.js';

const CryptoChart = ({prices}) => {
  const [chartRef, setChartRef] = useState(React.createRef())

  useEffect(() => {
    const cryptoChartRef = chartRef.current.getContext("2d");
    new Chart(cryptoChartRef, {
      type: "line",
      data: {
          labels: Object.keys(prices),
          datasets: [
            {
              label: '(BTC)',
              data: Object.values(prices),
              lineTension: 0,
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
      <a href="https://www.coindesk.com/price/bitcoin">Powered By CoinDesk</a>
    </div>

  );
};

export default CryptoChart;