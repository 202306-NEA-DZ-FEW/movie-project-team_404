import Image from "next/image"
import Link from "next/link"
import { moviesFetcher } from "@/utils/api"
import ActorCard from "@/components/ActorCard"

export default function ActorPage({ actorData, Movies }) {
  return (
    <div className="py-20">
      <h2 className="body-font text-center text-3xl text-emerald-300 font-serif">
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
      <h3 className=" text-teal-600 text-lg title-font font-medium mb-3 mx-5">
        Related Movies
      </h3>
      <div class="grid gap-4 grid-cols-3 grid-rows-3 items-center text-center mx-20">
        {Movies.map((item) => {
          return (
            <Link
              href="#"
              className=" content-center"
              key={item.original_title}
            >
              <div className=" flex-grow">
                <Image
                  width="100"
                  height="100"
                  alt={item.original_title}
                  class="object-cover object-center rounded-md"
                  src={"https://image.tmdb.org/t/p/w500" + item.backdrop_path}
                />
                <p class="leading-relaxed text-[11px] break-words ">
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
