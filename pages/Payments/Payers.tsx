import Content from "../../components/content";
import PayersColumns from "../../data/tableData/payers/payerColumns";
import { GetStaticProps } from "next";
import { fetchData } from "../api/payers";
import { useEffect, useState } from "react";
import CardsData from "../../data/tableData/payers/payersCards";
import Cards from "../../components/cards";
import Header from "../../components/atom/head";

export interface PayersInterface {
    result: any[];
    summary: any[];
}


export default function Payers({ result, summary }: PayersInterface) {

    const [data] = useState<any[]>(result);
    const [cardData, setCardData] = useState<any[]>([]);
    const [summaryData] = useState<any[]>(summary);
    useEffect(() => {
        setCardData(CardsData(summary))
    }, [summary])

    return (
        <div>
            <Header />
            <Content columns={PayersColumns} data={data}>
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