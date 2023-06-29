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
    totalRedeemedVouchers: number,
    unclaimedVouchers:number,
    pendingVouchers: number,


    // Add more properties as needed
}

export const fetchData = async (): Promise<any> => {
    try {
        const response: AxiosResponse<Payers> = await axios.get(
            'https://wiiqare.neema.co.za/api/v1/admin/payers'
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};