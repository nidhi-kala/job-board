export const BASE_URL =
  "https://crudcrud.com/api/d2e5c8db56274dc98ade3d6075e9ed6e";

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

export async function deleteJob(id) {
  const response = await fetch(`${BASE_URL}/jobs/${id}`, {
    method: "DELETE",
    mode: "cors",
    credentials: "same-origin",
  });
  return response;
}
