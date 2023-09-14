export async function moviesFetcher(apiRouter) {
  const url = "https://api.themoviedb.org/3/" + apiRouter

  const options = {
    headers: {
      accept: "application/json",
      Authorization: process.env.API_KEY,
    },
  }

  const response = await fetch(url, options)
  const data = await response.json()

  return data
}
