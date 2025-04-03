"use client"

import { useEffect, useState } from "react"
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  PointElement,
  LineElement,
} from "chart.js"
import { Pie, Bar, Line } from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title, PointElement, LineElement)

interface StatisticsChartProps {
  type: "pie" | "bar" | "line"
  title: string
  data: {
    labels: string[]
    datasets: {
      label: string
      data: number[]
      backgroundColor: string | string[]
      borderColor?: string | string[]
      borderWidth?: number
    }[]
  }
  options?: any
}

export default function StatisticsChart({ type, title, data, options }: StatisticsChartProps) {
  const [chartData, setChartData] = useState(data)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const defaultOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 16,
          weight: "bold",
        },
      },
    },
  }

  const mergedOptions = { ...defaultOptions, ...options }

  if (!isClient) {
    return <div className="h-64 flex items-center justify-center bg-gray-100 rounded-lg">Loading chart...</div>
  }

  return (
    <div className="card-neumorphic">
      {type === "pie" && <Pie data={chartData} options={mergedOptions} />}
      {type === "bar" && <Bar data={chartData} options={mergedOptions} />}
      {type === "line" && <Line data={chartData} options={mergedOptions} />}
    </div>
  )
}

