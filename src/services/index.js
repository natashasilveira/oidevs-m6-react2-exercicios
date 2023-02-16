import { BASE_URL, accessKey } from "./config";

export const fetcher = async (endpoint) => {
  const result = await fetch(`${BASE_URL}/${endpoint}?client_id=${accessKey}`);
  
  return result.json();
}
