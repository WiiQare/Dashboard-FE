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
    if (axios.isAxiosError(error)) {
      const baseUrl = window.location.origin;
      const currentUrl = window.location.href;
      const status = error.response?.status;
      if (
        (status === 401 || status === 403 || status === 500) &&
        !currentUrl.includes('/Login')
      ) {
        sessionStorage.removeItem('userState');
        sessionStorage.removeItem('userAuth');
        window.location.href = `${baseUrl}/auth/Login`;
        return null;
      }
    }

    throw new Error('An error occurred while fetching data.');
  }
};
