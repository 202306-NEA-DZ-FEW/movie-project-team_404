import Image from "next/image"
import { useEffect } from "react"

const SplashScreen = ({ finishLoading }) => {
  useEffect(() => {
    /** I know, I know am slowing the loading time intentionally and adding 580 ms
     * just ignore the settimeout
     */
    const time = setTimeout(() => {
      if (document.readyState === "complete") {
        finishLoading()
      }
    }, 700)
    return () => {
      clearInterval(time)
    }
  }, [])

  return (
    <>
      <Image
        className="grid h-screen place-items-center mx-auto"
        src="/infinity.svg"
        width={150}
        height={150}
      ></Image>
    </>
  )
}

export default SplashScreen
