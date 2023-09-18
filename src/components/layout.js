import Footer from "@/components/Footer/Footer"
import NavBar from "@/components/NavBar/NavBar"
import Results from "./SearchResult/Results"
import { useState, useEffect } from "react"
import { moviesFetcher } from "@/utils/api"

export default function Layout({ children }) {
  const [search, setSearch] = useState("")
  const [searchResult, setSearchResult] = useState([])

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const searchMoviesOrActors = async () => {
    const data = await moviesFetcher(
      `search/multi?query=${search}&include_adult=false&language=en-US&page=1`,
    )
    setSearchResult(data.results)
  }

  useEffect(() => {
    searchMoviesOrActors()
  }, [search])
  return (
    <>
      <NavBar search={search} handleSearch={handleSearch} />

      {searchResult.length !== 0 ? (
        <Results
          results={searchResult}
          handleResult={(result) => setSearchResult(result)}
          handleSearch={(search) => setSearch(search)}
        />
      ) : (
        <main>{children}</main>
      )}

      <Footer />
    </>
  )
}
