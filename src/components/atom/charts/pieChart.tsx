import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { useTheme } from "next-themes";

export interface PayersData {
    numberOfActivePayers?: number;
    numberOfRegisteredPayers?: number;
}

interface PieChartProps {
    data: PayersData | undefined;
}

const PayersPieChart: React.FC<PieChartProps> = ({ data }) => {
    const { theme } = useTheme();

    if (!data) {
        return null;
    }

    const totalPayers = (data.numberOfActivePayers || 0) + (data.numberOfRegisteredPayers || 0);
    const activePayersPercentage = (data.numberOfActivePayers || 0) / totalPayers;
    const registeredPayersPercentage = (data.numberOfRegisteredPayers || 0) / totalPayers;

    const pieData = [
        {
            id: "Active Payers",
            label: "Active Payers",
            value: activePayersPercentage,
        },
        {
            id: "Registered Payers",
            label: "Registered Payers",
            value: registeredPayersPercentage,
        },
    ];

    const textColor = theme === "dark" ? "#ffffff" : "#000000";

    return (
        <ResponsivePie
            data={pieData}
            margin={{ top: 40, right: 150, bottom: 80, left: 150 }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            
            arcLinkLabelsDiagonalLength={26}
            borderWidth={1}
            borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
            arcLinkLabelsSkipAngle={10}
            arcLinkLabelsThickness={2}
            arcLinkLabelsTextColor={textColor}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
            valueFormat={(value) => `${Math.round(value * 100)} %`} 
            legends={[
                {
                    anchor: "bottom",
                    direction: "row",
                    justify: false,
                    translateX: 0,
                    translateY: 56,
                    itemsSpacing: 0,
                    itemWidth: 100,
                    itemHeight: 18,
                    itemTextColor: "#999",
                    itemDirection: "left-to-right",
                    itemOpacity: 1,
                    symbolSize: 15,
                    symbolShape: "circle",
                    effects: [
                        {
                            on: "hover",
                            style: {
                                itemTextColor: "#000",
                            },
                        },
                    ],
                },
            ]}
            theme={{
                tooltip: {
                    container: {
                        background: theme === "dark" ? "black" : "#ffffff",
                        color: theme === "dark" ? "#ffffff" : "#000000",
                    },
                },
            }}
        />
    );
};

export default PayersPieChart;
