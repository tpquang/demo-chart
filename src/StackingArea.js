import * as React from 'react'
import { Chart } from 'react-google-charts'
import dataGG from './dataGG'
import './App.css'
const StackingArea = () => {
  console.log(dataGG)
  return (
    <div id="chart">
    <Chart
      width={'1000px'}
      height={'500px'}
      chartType='AreaChart'
      loader={<div>Loading Chart</div>}
      data={dataGG}
      options={{
        isStacked: true,
        height: 1000,
        width: 2000,
        legend: { position: 'top', maxLines: 3 },
        vAxis: {
          minValue: 0,
          gridlines: { color: '#d5d5d5' }
        },
        hAxis: {
          format: 'dd/MM',
          gridlines: { color: '#d5d5d5' }
        },
        pointSize: 5,
        pointShape: 'circle'
      }}
      rootProps={{ 'data-testid': '2' }}
    />
    </div>
  )
}
export default StackingArea
