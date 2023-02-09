import { BASE_URL, accessKey } from "./config";

export const fetcher = (endpoint) => {
  const result = fetch(`${BASE_URL}/${endpoint}?client_id=${accessKey}`).then((response) => response.json());
  return result;
}
