import Link from "next/link"
import { moviesFetcher } from "@/utils/api"
import ActorCard from "@/components/ActorCard"

export default function ActorPage({ actorData, Movies }) {
  return (
    <div className="">
      <h2 className="font-bold text-opacity-20 text-5xl text-transparent  bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-600 mt-8 text-center">
        {actorData.name}
      </h2>
      <ActorCard
        gender={actorData.gender}
        popularity={actorData.popularity}
        imageUrl={actorData.profile_path}
        birthday={actorData.birthday}
        deathday={actorData.deathday}
        biography={actorData.biography}
      />
      <h3 className="font-bold text-opacity-20 text-5xl text-transparent  bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-600 m-10 py-18  text-center">
        Related Movies
      </h3>
      <div class="w-4/5 sm:w-full  sm:px-20  grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 mx-auto justify-center p-8">
        {Movies.map((item) => {
          return (
            <Link href={`/movies/movie/${item.id}`} key={item.original_title}>
              <div className=" card shadow-xl border hover:scale-105 transition-transform duration-300 hover:border-blue-500 transition-border w-full h-full rounded-2xl overflow-hidden">
                <img
                  alt={item.original_title}
                  className=" "
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                />
                <p class="card-body p-4 grid place-content-center text-center card-title ">
                  {item.original_title}
                </p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { actorid } = context.query
  const url = `person/${actorid}?language=en-US`
  const url_movie = `person/${actorid}/movie_credits?language=en-US`
  try {
    const data = await moviesFetcher(url)
    const movies = await moviesFetcher(url_movie)
    return {
      props: {
        actorData: data,
        Movies: movies.cast,
      },
    }
  } catch (error) {
    console.log(error)
  }
}
