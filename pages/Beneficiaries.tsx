import Content from "../components/content";
import BeneficiariesColumns, { BeneficiariesColumnGroupingModel } from "../data/tableData/beneficiaries/beneficiariesColumns";
import { GetStaticProps } from "next";
import { fetchData } from "./api/fetchData";
import { useEffect, useState } from "react";
import CardsData from "../data/tableData/beneficiaries/beneficiariesCards";

import Cards from "../components/molecules/cards";


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
          
            <Content columns={BeneficiariesColumns} groups={BeneficiariesColumnGroupingModel} data={data}>
                <Cards data={cardData} />
            </Content>

        </div>
    );

}


export const getStaticProps: GetStaticProps = async () => {
    const res = await fetchData("/beneficiaries");
    const result = await JSON.parse(JSON.stringify(await res));
    const summary = await JSON.parse(JSON.stringify(await fetchData("/beneficiaries/summary")))

    return {

        props: { result, summary },
        revalidate: 30
    }
}