const MovieCard = ({ title, poster_path }) => {
  return (
    <div className="card shadow-xl h-[100%]  border hover:scale-105 transition-transform duration-300 hover:border-blue-500 transition-border duration-300">
      <figure>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={`${title} poster`}
        />
      </figure>
      <div className="card-body p-4 grid place-content-center text-center ">
        <h2 className="card-title ">{title}</h2>
      </div>
    </div>
  )
}
export default MovieCard
