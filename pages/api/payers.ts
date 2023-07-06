import axios, { AxiosResponse } from 'axios';


export const fetchData = async (endPoint: string): Promise<any> => {

    try {
        const response: AxiosResponse<any> = await axios.get(
            `${process.env.WIIQARE_URI}${endPoint}`
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};