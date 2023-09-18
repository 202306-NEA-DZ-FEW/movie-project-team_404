import { moviesFetcher } from "@/utils/api"

export async function getServerSideProps(context) {
  const { movieId } = context.query
  const data = await moviesFetcher(`movie/${movieId}?language=en-US`)

  return {
    props: {
      movieDetails: data,
    },
  }
}
