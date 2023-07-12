import React from "react";
import { useTheme } from 'next-themes';
import { Chart } from "primereact/chart";

interface Props {
    payersInfo: any[]
}


const LineChart = ({ payersInfo }: Props) => {
    const { theme } = useTheme();

    const [chartData, setChartData] = React.useState({});
    const [chartOptions, setChartOptions] = React.useState({});
    const [getPayersLabels, setPayersLabels] = React.useState<string[]>([]);
    const [getPayersValues, setPayersValues] = React.useState<number[]>([]);
    const [getPurchasedVouchers, setPurchasedVouchers] = React.useState<number[]>([]);
    const [getActivePayers, setActivePayers] = React.useState<number[]>([]);


    let payersValue: number[] = [];
    let payersPurchasedVouchers: number[] = [];;
    let payersLabels: any[] = [];
    let activePayers: number[] = [];

    payersInfo &&
        payersInfo.forEach((info: any) => {
            payersLabels.push(info.country);
            payersValue.push(info.numberOfRegisteredPayers);
            payersPurchasedVouchers.push(info.totalNumberOfPurchasedVouchers);
            activePayers.push(info.numberOfActivePayers);
        });

    React.useEffect(() => {
        setPayersLabels(payersLabels);
        setPayersValues(payersValue);
        setPurchasedVouchers(payersPurchasedVouchers);
        setActivePayers(activePayers);
    }, [activePayers, payersInfo, payersLabels, payersPurchasedVouchers, payersValue]);

    React.useEffect(() => {
        const data = {
            labels: getPayersLabels,

            datasets: [
                {
                    label:
                        (payersValue && "Registered Payers"),
                    data: getPayersValues,

                    fill: true,
                    backgroundColor:
                        ("rgb(232, 200, 37, 0.4)"),
                    borderColor:
                        ("rgb(232, 200, 37)"),
                    tension: 0.3,
                    hoverBackgroundColor:
                        ("rgb(232, 200, 37)"),
                },
                {
                    label:
                        (payersPurchasedVouchers && "Purchased Vouchers"),
                    data: getPurchasedVouchers,

                    fill: true,
                    backgroundColor:
                        ("rgb(0, 126, 253, 0.4)"),
                    borderColor:
                        ("rgb(0, 126, 253)"),
                    tension: 0.3,
                    hoverBackgroundColor:
                        ("rgb(0, 126, 253)"),
                },
                {
                    label:
                        (activePayers && "Active Payers"),
                    data: getActivePayers,

                    fill: true,
                    backgroundColor:
                        ("rgb(1, 236, 100, 0.4)"),
                    borderColor:
                        ("rgb(1, 236, 100)"),
                    tension: 0.3,
                    hoverBackgroundColor:
                        ("rgb(1, 236, 100)"),
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
                        color: theme === 'dark' && "rgb(225,225,225)",
                    },
                },
            },
            scales: {
                x: {
                    ticks: {
                        color: theme === 'dark' && "rgb(225,225,225)",
                        font: {
                            size: 12,
                            // family: fontFamily,
                        },
                    },
                    grid: {
                        color: "transparent",
                    },
                },
                y: {
                    ticks: {
                        color: theme === 'dark' && "rgb(225,225,225)",
                        font: {
                            size: 12,
                            // family: fontFamily,
                        },
                    },
                    grid: {
                        color: theme === 'dark' ? "rgba(222,221,221,0.2)" : "rgba(0,0,0,0.2)"
                    },
                },
            },
        };
        setChartData(data);
        setChartOptions(options);
    }, [activePayers, getActivePayers, getPayersLabels, getPayersValues, getPurchasedVouchers, payersPurchasedVouchers, payersValue, theme]);

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
