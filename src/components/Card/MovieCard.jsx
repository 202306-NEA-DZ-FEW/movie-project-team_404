import Image from "next/image"

const MovieCard = ({ title, poster_path }) => {
  return (
    <div className="card shadow-xl h-[100%]  border hover:scale-105 transition-transform duration-300 hover:border-blue-500 transition-border ">
      <figure>
        <Image
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={`${title} poster`}
          width={"300"}
          height={"300"}
        />
      </figure>
      <div className="card-body p-4 grid place-content-center text-center ">
        <h2 className="card-title ">{title}</h2>
      </div>
    </div>
  )
}
export default MovieCard
