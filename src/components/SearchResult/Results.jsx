import Link from "next/link"
import ActorsCard from "../ActorsCard"
import MovieCard from "../Card/MovieCard"
import { useRouter } from "next/router"

const Results = ({ results, handleResult, handleSearch }) => {
  const handleRedirect = () => {
    handleResult([])
    handleSearch("")
  }

  return (
    <div className="w-4/5 sm:w-full  sm:px-20  grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mx-auto justify-center p-8">
      {results.map(
        (result) =>
          (result.media_type === "movie" && (
            <Link onClick={handleRedirect} href={`/movies/${result.id}`}>
              <MovieCard
                title={result.title}
                poster_path={result.poster_path}
              />
            </Link>
          )) ||
          (result.media_type === "person" && (
            <Link onClick={handleRedirect} href={`/actors/${result.id}`}>
              <ActorsCard
                name={result.name}
                profile_path={result.profile_path}
                popularity={result.popularity}
              />
            </Link>
          )),
      )}
    </div>
  )
}

export default Results
