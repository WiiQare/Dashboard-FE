import axios, { AxiosResponse } from 'axios';

export const fetchData = async (
  endPoint: string,
  token?: string,
  take?: number,
  skip?: number,
): Promise<any> => {
  try {
    const url = `${process.env.WIIQARE_URI}/admin${endPoint}`;
    const params =
      take !== undefined && skip !== undefined ? { take, skip } : undefined;
    const headers = token
      ? {
          Authorization: `Bearer ${token}`,
        }
      : undefined;

    const response: AxiosResponse<any> = await axios.get(url, {
      params,
      headers,
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('An error occurred while fetching data.');
    }
  } catch (error) {
    // console.error('Error fetching data:', error);
    throw new Error('An error occurred while fetching data.');
  }
};
