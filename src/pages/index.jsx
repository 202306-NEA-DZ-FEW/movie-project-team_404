import { moviesFetcher } from "@/utils/api"
import Hero from "./components/HomePage/Hero"
import MovieCard from "./components/Card/MovieCard"
import Link from "next/link"

function HomePage({ latestMovies, selectedMovie }) {
  return (
    <main className="font-mono ">
      <Hero movie={selectedMovie} />
      <div className="grid border-l-indigo-900 grid-cols-2 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 p-8 ">
        {latestMovies.results.map((movie) => {
          return (
            <div key={movie.id}>
              <Link href={`/movies/${movie.id}`}>
                <MovieCard {...movie} />
              </Link>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export async function getStaticProps() {
  const data = await moviesFetcher("trending/movie/week?language=en-US")
  const randomIndex = Math.floor(Math.random() * data.results.length)
  const selectedMovie = data.results[randomIndex]
  return {
    props: {
      latestMovies: data,
      selectedMovie,
    },
  }
}
export default HomePage
