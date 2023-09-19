import { moviesFetcher } from "@/utils/api"

import MovieCard from "@/components/Card/MovieCard"
import Pagination from "@/components/Pagination"
import Link from "next/link"

const Movies = ({ config, data, page, typeIndex }) => {
  const imgConfig = config.images.base_url + config.images.backdrop_sizes[0]

  const realmoviesTypes = [
    "Now Playing",
    "Upcoming",
    "Popular",
    "Top Rated",
    "Latest",
  ]

  return (
    <>
      <div className="my-12 text-accent font-bold">
        <h1
          className="
          text-[10vw] text-center
          sm:text-[5vw] sm:px-10"
        >
          {realmoviesTypes[typeIndex]}
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-10 py-20 px-10">
        {data.results.map((movie) => {
          return (
            <Link href={`/movies/movie/${movie.id}`} key={movie.id}>
              <MovieCard
                title={movie.original_title}
                poster_path={movie.poster_path}
              />
            </Link>
          )
        })}
      </div>
      <Pagination pages={data.total_pages} currentPage={page} />
    </>
  )
}

export async function getServerSideProps(context) {
  const moviesTypes = [
    "now_playing",
    "upcoming",
    "popular",
    "top_rated",
    "latest",
  ]

  const choosenType = context.params.type
  const { page } = context.query

  if (!moviesTypes.includes(choosenType)) return { notFound: true }

  const config = await moviesFetcher("configuration")
  let apiRoute

  if (choosenType === "latest") apiRoute = `trending/movie/week?page=${page}`
  else apiRoute = `movie/${choosenType}?page=${page}`

  const data = await moviesFetcher(apiRoute)

  if (!data.results.length) return { notFound: true }

  const typeIndex = moviesTypes.indexOf(choosenType)

  return { props: { config, data, page, typeIndex } }
}

export default Movies
