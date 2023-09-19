import { moviesFetcher } from "@/utils/api"
import ActorsCard from "@/components/ActorsCard"
import Link from "next/link"

export default function Actors({ actors }) {
  return (
    <div>
      <h1 className="font-bold text-opacity-20 text-4xl text-transparent  bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-600 mt-10 py-18  text-center ">
        Popular Actors
      </h1>
      <div className="h- 500 grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5  gap-10 mx-auto justify-items-center mt-10 py-15">
        {actors.results.map((actor) => (
          <div className="w-4/5 h-4/5 " key={actor.id}>
            <Link href={`actors/${actor.id}`}>
              <ActorsCard {...actor} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const result = await moviesFetcher("person/popular?language=en-US&page=1")

  return {
    props: {
      actors: result,
    },
  }
}
