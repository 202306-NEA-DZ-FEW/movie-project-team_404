import { moviesFetcher } from "@/utils/api"

import Card from "@/components/Card"
import Pagination from "@/components/Pagination"

const Movies = ({ config, data, page }) => {
  const imgConfig = config.images.base_url + config.images.backdrop_sizes[0]

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10 pt-5">
        {data.results.map((movie) => {
          return <Card movie={movie} imgConfig={imgConfig} key={movie.id} />
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
  const data = await moviesFetcher("movie/" + choosenType + `?page=${page}`)

  if (!data.results.length) return { notFound: true }

  return { props: { config, data, page } }
}

export default Movies
