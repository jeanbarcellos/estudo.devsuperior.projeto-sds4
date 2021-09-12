import { useEffect, useState } from 'react'
import Chart from 'react-apexcharts'
import { SaleSucess } from 'types/sales'
import { round } from 'utils/format'
import * as Api from 'api/sales'

type SeriesData = {
  name: string
  data: number[]
}

type ChartData = {
  labels: {
    categories: string[]
  }
  series: SeriesData[]
}

const BarChart = () => {
  const [chartData, setChartData] = useState<ChartData>({
    labels: {
      categories: []
    },
    series: [
      {
        name: '',
        data: []
      }
    ]
  })

  useEffect(() => {
    Api.successBySeller().then(response => {
      const data = response.data as SaleSucess[]
      const myLabels = data.map(x => x.sellerName)
      const mySeries = data.map(x => round((100.0 * x.deals) / x.visited, 1))

      setChartData({
        labels: {
          categories: myLabels
        },
        series: [
          {
            name: '% Success',
            data: mySeries
          }
        ]
      })
    })
  }, [])

  const options = {
    plotOptions: {
      bar: {
        horizontal: true
      }
    }
  }

  return (
    <Chart
      options={{ ...options, xaxis: chartData.labels }}
      series={chartData.series}
      type='bar'
      height='240'
    />
  )
}

export default BarChart
