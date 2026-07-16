import Chart from "react-apexcharts";

function RevenueChart() {
  const options = {
    chart: {
      toolbar: { show: false },
      background: "transparent",
    },
    stroke: {
      curve: "smooth",
      width: 4,
    },
    colors: ["#3b82f6"],
    grid: {
      borderColor: "#2d2d30",
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      labels: {
        style: {
          colors: "#9ca3af",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#9ca3af",
        },
      },
    },
    tooltip: {
      theme: "dark",
    },
  };

  const series = [
    {
      name: "Revenue",
      data: [22, 38, 35, 55, 48, 72],
    },
  ];

  return (
    <Chart
      options={options}
      series={series}
      type="line"
      height={220}
    />
  );
}

export default RevenueChart;