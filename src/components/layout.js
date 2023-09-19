import Footer from "@/components/Footer/Footer"
import NavBar from "@/components/NavBar/NavBar"
import Results from "./SearchResult/Results"
import SplashScreen from "./SplashScreen/SplashScreen"

import { moviesFetcher } from "@/utils/api"

import { useState, useEffect } from "react"
import { useRouter } from "next/router"

export default function Layout({ children }) {
  const router = useRouter()
  const isHome = router.pathname === "/"
  const [isLoading, setIsLoading] = useState(isHome)

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
    if (isLoading) {
      return
    }
  }, [search, isLoading])

  return (
    <>
      {isLoading && isHome ? (
        <SplashScreen finishLoading={() => setIsLoading(false)} />
      ) : (
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
      )}
    </>
  )
}
