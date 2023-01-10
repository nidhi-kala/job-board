//crudcrud.com/api/c61c56d1519d49dd9991df2c3e30aa78

https: fetch;
fetch("https://crudcrud.com/api/c61c56d1519d49dd9991df2c3e30aa78/jobs")
  .then((response) => response.json())
  .then((data) => console.log(data));

// Example POST method implementation:
async function createJob(
  data = {},
  url = "https://crudcrud.com/api/c61c56d1519d49dd9991df2c3e30aa78/jobs"
) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response;
}

createJob("https://crudcrud.com/api/c61c56d1519d49dd9991df2c3e30aa78/jobs", {
  title: "web dev",
  description: "lorem10",
});

createJob({ title: "foo1", description: "baz2" })
  .then((data) => {
    console.log(data.json());
  })
  .catch((err) => {
    console.log(err);
  });

function getJobs(
  url = "https://crudcrud.com/api/c61c56d1519d49dd9991df2c3e30aa78/jobs"
) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
}
