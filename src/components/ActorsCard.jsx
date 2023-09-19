export default function ActorsCard({
  name,
  profile_path,
  popularity,
  character = "",
}) {
  return (
    <div className="bg-light-gray items-center relative cursor-pointer shadow-lg transition-all transform hover:scale-110 duration-500 hover:skew-y-3 ">
      <img
        className="rounded-lg w-full h-full"
        src={"https://image.tmdb.org/t/p/w500/" + profile_path}
        alt={name}
      />

      <div className=" text-center rounded-lg ">
        <h1 className="text-lg uppercase cursor-pointer">{name}</h1>
        <p>{character}</p>
      </div>
      <div className="bg-blue-400 text-blue-950 text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2 ">
        <span>❤️{Math.round(popularity)}k</span>
      </div>
    </div>
  )
}
