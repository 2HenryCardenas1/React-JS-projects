import {API_KEY, URL} from "../envaironmten";

export async function getTitles(page) {
  const response = await fetch(`${URL}/titles?page=${page}`, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY,
    },
  });
  const data = await response.json();

  return data;
}
