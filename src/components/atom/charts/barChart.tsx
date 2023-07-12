import React, { useEffect, useLayoutEffect, useState } from "react";
import { Box } from "@mui/material";
import { ResponsiveBar, BarDatum } from "@nivo/bar";
import { useTheme } from 'next-themes';
import { fetchData } from "@/pages/api/fetchData";
import { UserContext } from "@/context/UserContext";

export interface ChartData extends BarDatum {
    activePayers: number;
    registeredPayers: number;
    country: string;
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
                data={data}
                keys={['registeredBeneficiariesPerCountry', 'activeBeneficiariesPerCountry']}
                indexBy="activePayersPerCountry"
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


export default BarChart;
