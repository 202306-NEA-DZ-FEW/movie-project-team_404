import React from "react"
import Link from "next/link"
import MovieCard from "../Card/MovieCard"

function RelatedMovies({ relatedInformation }) {
  const relatedData = relatedInformation.results.map((movieInfo) => {
    return (
      <Link href={`/movies/movie/${movieInfo.id}`} key={movieInfo.id}>
        <MovieCard
          title={movieInfo.title}
          poster_path={movieInfo.poster_path}
        />
      </Link>
    )
  })

  return (
    <div>
      <h1 className="font-bold text-opacity-20 text-2xl text-transparent mb-5 bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-600 mt-10 py-18 text-center">
        Related movies:
      </h1>
      <div className="w-4/5 sm:w-full  sm:px-20  grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mx-auto justify-center p-8 ">
        {relatedData}
      </div>
    </div>
  )
}

export default RelatedMovies
