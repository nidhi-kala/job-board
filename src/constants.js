export const BASE_URL =
  "https://crudcrud.com/api/797753c3eccf4f1eaf3664d8119aa483";

export async function createJob(data, url = `${BASE_URL}/jobs`) {
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

export async function deleteJob(id) {
  const response = await fetch(`${BASE_URL}/jobs/${id}`, {
    method: "DELETE",
    mode: "cors",
    credentials: "same-origin",
  });
  return response;
}
