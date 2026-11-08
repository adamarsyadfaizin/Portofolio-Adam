import axios from "axios";

export const fetcher = (url: string) =>
  axios.get(url, { timeout: 6000 }).then((response) => response.data);
