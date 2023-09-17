export default function ActorsCard({ name, profile_path, popularity }) {
  return (
    <div className="bg-light-gray items-center relative cursor-pointer shadow-md transition-transform transform hover:scale-105 hover:skew-y-3 ">
      <div className="overflow-hidden ">
        <img
          className="rounded-lg w-full h-full"
          src={"https://image.tmdb.org/t/p/w500/" + profile_path}
          alt={name}
        />
      </div>
      <div className=" text-center ">
        <h1 className="text-lg uppercase cursor-pointer">{name}</h1>
      </div>
      <div className="bg-blue-400 text-blue-950 text-xs uppercase font-bold rounded-full p-2 absolute top-0 ml-2 mt-2">
        <span>❤️{popularity}</span>
      </div>
    </div>
  )
}
