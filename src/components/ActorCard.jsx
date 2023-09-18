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
    <section class="body-font">
      <div class="container px-5 py-2 mx-auto flex ">
        <div class="w-1/2 mb-10 lg:mb-0 rounded-xl overflow-hidden">
          <img
            alt="feature"
            class="object-cover object-center"
            src={"https://image.tmdb.org/t/p/w500" + props.imageUrl}
          />
        </div>
        <div class="flex flex-col flex-wrap py-6 -mb-10 w-1/2 pl-12 text-left  ">
          <div class="flex flex-col mb-10 items-start ">
            <div class="flex-grow">
              <h2 class=" text-teal-600 text-lg title-font font-medium mb-3 sm:text-base">
                Gender
              </h2>
              <p class="leading-relaxed text-base sm:text-sm">
                {gender_value(props.gender)}
              </p>
            </div>
          </div>
          <div class="flex flex-col mb-10 items-start ">
            <div class="flex-grow">
              <h2 class="text-teal-600 text-lg title-font font-medium mb-3 sm:text-base">
                Popularity
              </h2>
              <p class="leading-relaxed text-base sm:text-sm">
                {props.popularity}
              </p>
            </div>
          </div>
          <div class="flex flex-col mb-10 items-start ">
            <div class="flex-grow">
              <h2 class="text-teal-600 text-lg title-font font-medium mb-3 sm:text-base">
                Birthday
              </h2>
              <p class="leading-relaxed text-base sm:text-sm">
                {props.birthday}
              </p>
            </div>
          </div>
          <div class="flex flex-col mb-10 items-start ">
            <div class="flex-grow">
              <h2 class="text-teal-600 text-lg title-font font-medium mb-3 sm:text-base">
                Deathday
              </h2>
              <p class="leading-relaxed text-base sm:text-sm">
                {props.deathday}
              </p>
            </div>
          </div>
          <div class="flex flex-col mb-10 items-start  w-[40rem]">
            <div class="flex-grow">
              <h2 class="text-teal-600 text-lg title-font font-medium mb-3 sm:text-base">
                Biography
              </h2>
              <p class=" text-[11px] sm:w-[370px] ">{props.biography}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ActorCard
