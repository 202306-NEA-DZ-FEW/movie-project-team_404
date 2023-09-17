import Image from "next/image"
import Link from "next/link"
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
const ActorCard = (props) => {
  return (
    <section class=" text-white body-font">
      <div class="container px-5 py-2 mx-auto flex flex-wrap">
        <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-xl overflow-hidden">
          <Image
            width="500"
            height="300"
            alt="feature"
            class="object-cover object-center"
            src={"https://image.tmdb.org/t/p/w500" + props.imageUrl}
          />
        </div>
        <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div class="flex-grow">
              <h2 class=" text-teal-600 text-lg title-font font-medium mb-3">
                Gender
              </h2>
              <p class="leading-relaxed text-base">
                {gender_value(props.gender)}
              </p>
            </div>
          </div>
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div class="flex-grow">
              <h2 class="text-teal-600 text-lg title-font font-medium mb-3">
                Popularity
              </h2>
              <p class="leading-relaxed text-base">{props.popularity}</p>
            </div>
          </div>
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div class="flex-grow">
              <h2 class="text-teal-600 text-lg title-font font-medium mb-3">
                Birthday
              </h2>
              <p class="leading-relaxed text-base">{props.birthday}</p>
            </div>
          </div>
          <div class="flex flex-col mb-10 lg:items-start items-center">
            <div class="flex-grow">
              <h2 class="text-teal-600 text-lg title-font font-medium mb-3">
                Deathday
              </h2>
              <p class="leading-relaxed text-base">{props.deathday}</p>
            </div>
          </div>
          <div class="flex flex-col mb-10 lg:items-start items-center w-[40rem]">
            <div class="flex-grow">
              <h2 class="text-teal-600 text-lg title-font font-medium mb-3">
                Biography
              </h2>
              <p class=" leading-tight text-[11px]">{props.biography}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ActorCard
