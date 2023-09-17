import { moviesFetcher } from "@/utils/api"

import MovieCard from "@/pages/components/Card/MovieCard"
import Pagination from "@/components/Pagination"

const Genre = ({ config, data, page, choosenGenre }) => {
  const imgConfig = config.images.base_url + config.images.backdrop_sizes[0]

  return (
    <>
      <div className="my-12 text-accent font-bold">
        <h1
          className="
          text-[10vw] text-center
          sm:text-[5vw] sm:px-10"
        >
          {choosenGenre}
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-10 pb-20 px-10">
        {data.results.map((movie) => {
          return (
            <MovieCard
              title={movie.original_title}
              poster_path={movie.poster_path}
              key={movie.id}
            />
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
