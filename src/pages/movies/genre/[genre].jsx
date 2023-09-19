import { moviesFetcher } from "@/utils/api"

import MovieCard from "@/components/Card/MovieCard"
import Pagination from "@/components/Pagination"
import Link from "next/link"

const Genre = ({ config, data, page, choosenGenre }) => {
  const imgConfig = config.images.base_url + config.images.backdrop_sizes[0]

  return (
    <>
      <div className="font-bold text-opacity-20 text-4xl text-transparent  bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-700 mt-7 text-center">
        <h1
          className=" mt-4
          "
        >
          {choosenGenre}
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-10 py-12 px-10">
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
  const result = await moviesFetcher("genre/movie/list")
  const genres = result.genres

  const choosenGenre = context.params.genre
  const { page } = context.query

  const getId = () => {
    for (let i = 0; i < genres.length; i++) {
      if (genres[i].name === choosenGenre) return genres[i].id
    }
  }

  let genreId = getId()

  if (!genreId) return { notFound: true }

  const config = await moviesFetcher("configuration")
  const data = await moviesFetcher(
    `discover/movie?page=${page}&with_genres=${genreId}`,
  )

  if (!data.results.length) return { notFound: true }

  return { props: { config, data, page, choosenGenre } }
}

export default Genre
