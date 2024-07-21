import axios, { AxiosResponse } from 'axios';

interface RequestParams {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  auth?: boolean;
  data?: any;
}

export default async function request(
  { url, method, auth, data }: RequestParams,
  login?: boolean
): Promise<AxiosResponse<any>> {
  let headers: { "Content-Type": string, authorization?: string } = { "Content-Type": "application/json" };
  
  if (auth) {
    const token = localStorage.getItem("token");
    headers = {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    };
  }

  try {
    const res = await axios({
      method,
      url,
      data,
      headers,
    });
    console.log(res);
    return res;
  } catch (err: any) {
    if (
      err &&
      err.response &&
      err.response.data &&
      err.response.data.error &&
      err.response.data.error.statusCode === 401
    ) {
      localStorage.removeItem("token");
      if (!login) window.location.href = "/login";
    }
    throw err;
  }
}
