import { headers } from "../../next.config"

const gender_value = (value) => {
  switch (value) {
    case 0:
      return "Not set / not specified"
    case 1:
      return "Female"
    case 2:
      return "Male"
    case 3:
      return "Non-binary"
    default:
      return "undefined"
  }
}
const ActorCard = ({
  imageUrl,
  gender,
  popularity,
  birthday,
  deathday,
  biography,
  name,
}) => {
  const deathDay = deathday ? deathday : "Not yet"
  return (
    <section className="grid xl:grid-cols-3 md:grid-cols-1 sm:grid-cols-1  gap-5">
      <div className="col-span-1 justify-self-center max-sm:col-span-2 mt-9">
        <img
          alt="feature"
          class="object-cover object-center"
          src={"https://image.tmdb.org/t/p/w500" + imageUrl}
          className="rounded-lg w-auto h-auto"
        />
      </div>
      <div className="col-span-2 px-4 border-x-2 m-10 ">
        <h2 className="m-10 font-bold">
          Gender : <span className="font-normal">{gender_value(gender)}</span>
        </h2>
        <h2 className="m-10 font-bold">
          Popularity : <span className="font-normal">{popularity}</span>
        </h2>
        <h2 className="m-10 font-bold">
          Birthday : <span className="font-normal">{birthday}</span>
        </h2>

        <h2 className="m-10 font-bold">
          Deathday : <span className="font-normal">{deathDay}</span>
        </h2>

        <h2 className="m-10 font-bold">Biography :</h2>
        <p className=" inline-block ">{biography}</p>
      </div>
    </section>
  )
}

export default ActorCard
