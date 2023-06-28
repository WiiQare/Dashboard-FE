import axios, { AxiosResponse } from 'axios';


export interface Payers {
    // Define the structure of your table data
    payerId: string,
    payerName: string,
    payerCountry: string,
    registeredDate: string,
    beneficiaries: string;
    purchasedVouchers: number,
    openVouchers: number,
    totalRedeemedVouchers: number

    // Add more properties as needed
}

export const fetchData = async (): Promise<any> => {
    try {
        const response: AxiosResponse<Payers> = await axios.get(
            'http://ec2-52-47-127-9.eu-west-3.compute.amazonaws.com:3000/api/v1/admin/payers/summary'
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};