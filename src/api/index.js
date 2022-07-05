import { QueryClient } from "react-query";
import { API_URL } from "./constants";
import axios from "axios";

export const queryClient = new QueryClient();

export const checkAuth = async ({ token }) => {
  if (token) {
    console.log('hi')
    const res = await axios.post(`${API_URL}/check-token`, { token });
    return res.data;
  } else {
    return null;
  }
};
