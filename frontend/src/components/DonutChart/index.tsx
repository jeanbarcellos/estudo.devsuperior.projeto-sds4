import { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import { SaleSum } from 'types/sales'
import * as Api from 'api/sales'

type ChartData = {
  labels: string[]
  series: number[]
}

const DonutChart = () => {
  const [chartData, setChartData] = useState<ChartData>({
    labels: [],
    series: []
  })

  useEffect(() => {
    Api.amountBySeller().then(response => {
      const data = response.data as SaleSum[]

      const myLabels = data.map(x => x.sellerName)
      const mySeries = data.map(x => x.sum)

      setChartData({ labels: myLabels, series: mySeries })
    })
  }, [])

  const options = {
    legend: {
      show: true
    }
  }

  return (
    <Chart
      options={{ ...options, labels: chartData.labels }}
      series={chartData.series}
      type='donut'
      height='240'
    />
  )
}

export default DonutChart
