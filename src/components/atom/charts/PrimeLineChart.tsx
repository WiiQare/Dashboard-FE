import React from "react";
import { useTheme } from "next-themes";
import { Chart } from "primereact/chart";

interface Props {
    payersInfo: any[];
}

const LineChart = ({ payersInfo }: Props) => {
    const { theme } = useTheme();

    const [chartData, setChartData] = React.useState<any>({});
    const [chartOptions, setChartOptions] = React.useState<any>({});

    React.useEffect(() => {
        const data = {
            labels: payersInfo.map((info) => info.country),
            datasets: [
                {
                    label: "Registered Payers",
                    data: payersInfo.map((info) => info.numberOfRegisteredPayers),
                    fill: true,
                    backgroundColor: "rgba(232, 200, 37, 0.4)",
                    borderColor: "rgb(232, 200, 37)",
                    tension: 0.3,
                    hoverBackgroundColor: "rgb(232, 200, 37)",
                },
                {
                    label: "Purchased Vouchers",
                    data: payersInfo.map((info) => info.totalNumberOfPurchasedVouchers),
                    fill: true,
                    backgroundColor: "rgba(0, 126, 253, 0.4)",
                    borderColor: "rgb(0, 126, 253)",
                    tension: 0.3,
                    hoverBackgroundColor: "rgb(0, 126, 253)",
                },
                {
                    label: "Active Payers",
                    data: payersInfo.map((info) => info.numberOfActivePayers),
                    fill: true,
                    backgroundColor: "rgba(1, 236, 100, 0.4)",
                    borderColor: "rgb(1, 236, 100)",
                    tension: 0.3,
                    hoverBackgroundColor: "rgb(1, 236, 100)",
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
                        color: theme === "dark" ? "rgb(225, 225, 225)" : undefined,
                    },
                },
            },
            scales: {
                x: {
                    ticks: {
                        color: theme === "dark" ? "rgb(225, 225, 225)" : undefined,
                        font: {
                            size: 12,
                        },
                    },
                    grid: {
                        color: "transparent",
                    },
                },
                y: {
                    ticks: {
                        color: theme === "dark" ? "rgb(225, 225, 225)" : undefined,
                        font: {
                            size: 12,
                        },
                    },
                    grid: {
                        color: theme === "dark" ? "rgba(222, 221, 221, 0.2)" : "rgba(0, 0, 0, 0.2)",
                    },
                },
            },
        };

        setChartData(data);
        setChartOptions(options);
    }, [payersInfo, theme]);

    return (
        <Chart
            type="line"
            width="100%"
            height="100%"
            data={chartData}
            options={chartOptions}
            style={{
                fontFamily: "inherit",
                padding: "0.5rem",
            }}
        />
    );
};

export default LineChart;
