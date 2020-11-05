import React, {useEffect, useState} from 'react';
import Chart from 'chart.js';

const CryptoChart = ({prices}) => {
  const [chartRef, setChartRef] = useState(React.createRef())

  useEffect(() => {
    const cryptoChartRef = chartRef.current.getContext("2d");
    new Chart(cryptoChartRef, {
      type: "line",
      data: {
          //Bring in data
          labels: Object.keys(prices),
          datasets: [
              {
                  data: Object.values(prices),
              }
          ]
      },
      options: {
          //Customize chart options
      }
    });
  }, [chartRef, prices]);



  return (
    <canvas id="crypto-chart" ref={chartRef} />
  );
};

export default CryptoChart;