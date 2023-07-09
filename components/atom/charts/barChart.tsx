import React from "react";
import { Box } from "@mui/material";
import { ResponsiveBar, BarDatum } from "@nivo/bar";
import { useTheme } from 'next-themes';

interface ChartData extends BarDatum {
    countryAndCityOfProvider: string;
    TotalRegisteredBeneficiaries: number;
    totalActiveBeneficiaries: number;
}

interface BarChartProps {
    data: ChartData[];
}

const BarChart: React.FC<BarChartProps> = ({ data }: BarChartProps) => {
    const { theme } = useTheme();

    return (
        <Box
            height="400px"
            width="100%"
            className="bar-chart"
            justifyContent="center"
        >
            <ResponsiveBar
                data={data as BarDatum[]}
                keys={['TotalRegisteredBeneficiaries', 'totalActiveBeneficiaries']}
                indexBy="countryAndCityOfProvider"
                margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
                padding={0.3}
                valueScale={{ type: "linear" }}
                borderWidth={2}
                indexScale={{ type: "band", round: true }}
                colors={{ scheme: "category10" }}
                groupMode="grouped"
                labelFormat={(value) => `${value}%`}
                borderColor={{
                    from: "color",
                    modifiers: [["darker", 0.3]],
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: -30,
                    legend: "Country and City",
                    legendPosition: "middle",
                    legendOffset: 50,
                }}
                axisLeft={{
                    tickSize: 0,
                    tickPadding: 0,
                    tickRotation: -45,
                    legend: "Value",
                    legendPosition: "middle",
                    legendOffset: -20,
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{
                    from: "color",
                    modifiers: [["brighter", 3]],
                }}
                legends={[
                    {
                        dataFrom: "keys",
                        anchor: "right",
                        direction: "column",
                        justify: false,
                        translateX: 80,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 70,
                        itemHeight: 20,
                        itemDirection: "left-to-right",
                        itemTextColor: theme === 'dark' ? "rgb(225,225,225)" : undefined,
                        itemOpacity: 0.85,
                        symbolSize: 15,
                        effects: [
                            {
                                on: "hover",
                                style: {
                                    itemOpacity: 1,
                                },
                            },
                        ],
                    },
                ]}
                role="application"
                ariaLabel="Bar Chart"
                theme={{
                    tooltip: {
                        container: {
                            background: theme === 'dark' ? "rgb(225,225,225)" : undefined,
                            color: theme === 'dark' ? "rgb(225,225,225)" : undefined,
                            display: "none",
                        },
                    },
                    axis: {
                        ticks: {
                            text: {
                                fill: theme === 'dark' ? "rgb(225,225,225)" : undefined,
                            },
                        },
                        legend: {
                            text: {
                                fill: theme === 'dark' ? "rgb(225,225,225)" : undefined,
                            },
                        },
                    },
                }}
            />
        </Box>
    );
};

const ExampleComponent: React.FC = () => {
    const data: ChartData[] = [
        {
            countryAndCityOfProvider: 'Country 1',
            TotalRegisteredBeneficiaries: 200,
            totalActiveBeneficiaries: 150,
        },
        {
            countryAndCityOfProvider: 'Country 2',
            TotalRegisteredBeneficiaries: 300,
            totalActiveBeneficiaries: 250,
        },
        {
            countryAndCityOfProvider: 'Country 3',
            TotalRegisteredBeneficiaries: 400,
            totalActiveBeneficiaries: 350,
        },
        // Add more data entries as needed
    ];

    return (
        <div className="h-[20rem]">
            <h2>Grouped Bar Chart Example</h2>
            <BarChart data={data} />
        </div>
    );
};

export default ExampleComponent;
