import React from "react";
import { ResponsivePie, DatumId } from "@nivo/pie";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from 'next-themes';


interface PieChartProps {
    data: DatumId[];
    endAngle?: number;
    innerRadius?: number;
    showLegend?: boolean;
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
}

const PieChart: React.FC<PieChartProps> = ({
    data,
    endAngle = 275,
    innerRadius = 0.3,
    showLegend = true,
    top = 18,
    right = 50,
    bottom = 80,
    left = 30,
}) => {
    const { theme } = useTheme();

    return (
        <Box height="100%" className="pie-chart" width="100%">
            <ResponsivePie
                data={data}
                margin={{ top, right, bottom, left }}
                innerRadius={innerRadius}
                padAngle={3}
                cornerRadius={2}
                activeOuterRadiusOffset={2}
                endAngle={endAngle}
                borderWidth={3}
                borderColor={{
                    from: "color",
                    modifiers: [["darker", 0.3]],
                }}
                colors={{ scheme: "category10" }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor={theme === 'dark' ? "rgb(225,225,225)" : "rgb(0,0,1)"}
                arcLinkLabelsThickness={2.5}
                arcLinkLabelsColor={{ from: "color" }}
                arcLabelsSkipAngle={2}
                arcLinkLabelsDiagonalLength={10}
                arcLabelsTextColor={{
                    from: "color",
                    modifiers: [["brighter", 3]],
                }}
                arcLinkLabelsOffset={4}
                arcLinkLabelsTextOffset={5}
                arcLinkLabelsStraightLength={10}
                defs={[
                    {
                        id: "dots",
                        type: "patternDots",
                        background: "inherit",
                        color: "rgba(255, 255, 255, 0.18)",
                        size: 4,
                        padding: 1,
                        stagger: true,
                    },
                    {
                        id: "lines",
                        type: "patternLines",
                        background: "inherit",
                        color: "rgba(255, 255, 255, 0.1)",
                        rotation: -50,
                        lineWidth: 6,
                        spacing: 10,
                        stagger: true,
                    },
                ]}
                fill={[
                    {
                        match: {
                            id: "totalPurchasedVouchers ",
                        },
                        id: "dots",
                    },
                    {
                        match: {
                            id: "totalPendingVouchers",
                        },
                        id: "dots",
                    },
                    {
                        match: {
                            id: "totalUnclaimedVouchers",
                        },
                        id: "dots",
                    },
                    {
                        match: {
                            id: "totalClaimedVouchers",
                        },
                        id: "lines",
                    },
                    {
                        match: {
                            id: "totalRedeemedVouchers",
                        },
                        id: "lines",
                    },
                ]}
                legends={showLegend ? [

                    {
                        anchor: "bottom",
                        direction: "row",
                        justify: false,
                        translateX: 20,
                        translateY: 70,
                        itemsSpacing: -8,
                        itemWidth: 80,
                        itemHeight: 18,
                        itemTextColor: theme === 'dark' ? "rgb(225,225,225)" : undefined,
                        itemDirection: "left-to-right",
                        itemOpacity: 1,
                        symbolSize: 8,
                        symbolShape: "circle", // "circle" | "square" | "diamond" | "triangle" | "star"
                        effects: [
                            {
                                on: "hover",
                                style: {
                                    itemTextColor: theme === 'dark' ? "rgb(225,225,225)" : undefined,
                                },
                            },
                        ],
                    },
                ]
                    : undefined}
                theme={{
                    tooltip: {
                        container: {
                            background: theme === 'dark' ? "rgb(225,225,225)" : undefined,
                            color: theme === 'dark' ? "rgb(225,225,225)" : undefined,
                        },
                    },
                }}
                animate={true}
            // motionStiffness={90}
            // motionDamping={15}
            />
        </Box>
    );
};

export default PieChart;
