import { moviesFetcher } from "@/utils/api"
import ActorsCard from "@/components/ActorsCard"

export default function Actors({ actors }) {
  return (
    <div className="h- 500 grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5  gap-10 mx-auto justify-items-center">
      {actors.results.map((actor) => (
        <div className="w-4/5 h-4/5" key={actor.id}>
          <ActorsCard {...actor} />
        </div>
      ))}
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
