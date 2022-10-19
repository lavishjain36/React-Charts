import React from 'react';
import BarChart from './components/BarChart';
import DoughnutChart from './components/DoughnutChart';
import LineChart from './components/LineCharts';


function App(){
  return(
    <div className="App">
      <div className="chart">
        <LineChart/>
        <BarChart/>
        <DoughnutChart/>
      </div>
    </div>
  )
}

export default App;