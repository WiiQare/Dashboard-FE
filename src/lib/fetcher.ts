import useSWR, { SWRConfiguration } from 'swr';

interface FetcherOptions {
  token?: string | null;
}

const baseURL = `${process.env.NEXT_PUBLIC_API_URL}/api/v1`;

const Fetcher = <T>(
    endpoint: string,
    options?: FetcherOptions & SWRConfiguration
  ) => {
    const response = async (url: string, init?: RequestInit) => {
      const headers = {
        ...(init?.headers || {}),
        ...(options?.token ? { Authorization: `Bearer ${options.token}` } : {}),
      };
  
      const modifiedInit: RequestInit = {
        ...init,
        headers,
      };
  
      const res = await fetch(url, modifiedInit);
  
      return res.json() as Promise<T>;
    };
  
    const { data, error, isValidating } = useSWR<T>(
      `${baseURL}${endpoint}`,
      response,
      options
    );
  
    return {
      data,
      isLoading: isValidating,
      isError: error,
    };
  };
  
export default Fetcher;
