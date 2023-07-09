import Content from "../../components/content";
import PayersColumns from "../../data/tableData/payments/payers/payerColumns";
import { GetStaticProps } from "next";
import { fetchData } from "../api/fetchData";
import { useEffect, useState } from "react";
import CardsData from "../../data/tableData/payments/paymentsCards";

import Cards from "../../components/molecules/cards";


export interface BeneficiariesInterface {
    result: any[];
    summary: any[];
}


export default function Payers({ result, summary }: BeneficiariesInterface) {

    const [data] = useState<any[]>(result);
    const [cardData, setCardData] = useState<any[]>([]);
    const [summaryData] = useState<any[]>(summary);
    useEffect(() => {
        setCardData(CardsData(summary))
    }, [summary])

    return (
        <div>
  
            <Content columns={PayersColumns} groups={[]} data={data}>
                <Cards data={cardData} />
            </Content>

        </div>
    );

}


export const getStaticProps: GetStaticProps = async () => {
    const res = await fetchData("/payments/payers");
    const result = await JSON.parse(JSON.stringify(await res));
    const summary = await JSON.parse(JSON.stringify(await fetchData("/payments/summary")))

    return {

        props: { result, summary },
        revalidate: 30
    }
}