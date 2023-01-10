export const BASE_URL =
  "https://crudcrud.com/api/b8f427d308894e4f97e3879c39c66460";

export async function createJob(data, url = `${BASE_URL}/jobs`) {
  console.log(JSON.stringify(data));
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
}
