import React, { useEffect, useState } from "react";
import CardsItem from "./ molecules /cardItem";
import { fetchData } from "../pages/api/payersSummary";




const Cards: React.FC = () => {


    const [data, setData] = useState<any>([]);

    useEffect(() => {
        const fetchDataFromAPI = async () => {
            try {
                const newData = await fetchData();
                setData(newData);
            } catch (error) {

            }
        };

        fetchDataFromAPI();
    }, []);
    const cards = [
        { title: "Total number of Registered", color: "bg-[#934286]", values: data.numberOfRegisteredPayers },
        { title: "Total Purchased Vouchers", color: "bg-[#F37500]", values: data.totalNumberOfPurchasedVouchers },
        { title: "Total Unspent Vouchers", color: "bg-[#FEE501]", values: data.totalNumberOfPendingVouchers },
        { title: "Number of active Payers", color: "bg-[#35B769]", values: data.totalNumberOfRedeemedVouchers },
        { title: "Number of Vouchers recalled", color: "bg-[#c71313]", values: data.numberOfActivePayers },
    ];


    return (
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-6 xl:grid-cols-5 2xl:gap-7.5 p-[23px]">
            {cards.map((card, index) => (
                <CardsItem
                    key={index}
                    title={card.title}
                    color={card.color}
                    values={card.values}
                />
            ))}
        </div>
    );
};

export default Cards;
