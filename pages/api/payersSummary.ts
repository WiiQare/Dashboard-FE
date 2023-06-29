import axios, { AxiosResponse } from 'axios';


export interface Payers {
    // Define the structure of your table data
    numberOfRegisteredPayers: number,
    totalNumberOfPurchasedVouchers: number,
    totalNumberOfPendingVouchers: number,
    totalNumberOfRedeemedVouchers: number,

    // Add more properties as needed
}

export const fetchData = async (): Promise<any> => {
    try {
        const response: AxiosResponse<Payers> = await axios.get(
            'https://wiiqare.neema.co.za/api/v1/admin/payers/summary'
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};