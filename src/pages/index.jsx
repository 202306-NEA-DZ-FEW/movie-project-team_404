import { moviesFetcher } from "@/utils/api"
import Hero from "@/components/HomePage/Hero"
import MovieCard from "@/components/Card/MovieCard"
import Link from "next/link"

function HomePage({ latestMovies }) {
  return (
    <main>
      <Hero movies={latestMovies.results} />
      <div className="w-4/5 sm:w-full  sm:px-20  grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mx-auto justify-center p-8">
        {latestMovies.results.map((movie) => {
          return (
            <div key={movie.id} className=" mx-auto ">
              <Link href={`/movies/movie/${movie.id}`}>
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
  return {
    props: {
      latestMovies: data,
    },
  }
}
export default HomePage
