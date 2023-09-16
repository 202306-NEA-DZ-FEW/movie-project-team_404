import Image from "next/image"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="pt-24 w-full">
      <div className="flex justify-center items-center ">
        <div className="text-center min-h-[70rem]">
          <Image
            className="mx-auto"
            height="50"
            width="50"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFCUlEQVR4nO2ba28UZRTHF6PRL6B+Di8v9BVJZ0qWHXxBZjZBm8CLCpJYpNuLDWpsBUwbY9sE0bZpQdBqxCbUiC+MVuhui9IuUMRUSUMh9EbLNWXTG+zu35yl0312OjszOzu7MzvsSf4h7E5nzvnt85znzMxzPB5921CyZevLnCCVcT4xwAtinZNFPpKv5DP57jFrJW9se5Hzia2cT5zmBQkFKZ84xQtSS2np1hcyiX0D7xNreJ8YsT0Ay0BID7gt/irdEbFx447nOEH6XnkCf1k5Dja1oK3zGDq/7na0yEfyVSorVxsR3V6v99m0vzynCH73e7UYPj+CeDyOQjPyeSh8Ee/sqVkHQXUk8DTsmQO/7DiKaDSKQjeK4Yu2rhQIq9MhaZQkaJ6wwbvNDrEQfGKEkrxHNsr27LB3wy+vNIppV0VyOnA+8fPk3GeWOprz6Wx65ia2v/2uaqalz+l7o6Z1LrPS82EofIE9fjKRC/jN4qtsttdKeD0nf9Z0oKf3lGEAeucyKy0fYrFYyupQQsUSv9n/lvwBLR/6v1qF6oV37NyD6ZlZwwC0zmVWRnzY39icBCBI21Kyf8eRb+B2a+88xkKr9nCC2CB/cPy7E3C7UYxriVAQG4oAuOIIENemwPsf7scPPb2uFsWYdgrwT5i4IgAxdQTsrf3I9tvZXItiLK4CQnEZRLEOEIqFEIqVoFAshRscXwrPLQDDs8Afk0B4DphbfEJuhu4sAV9dBqpCQIAR/b/t8uPvXQtgIgJ88Gdq4ErR95MRFwJYegQcGNYOXhYdR8e7CkDvuLHgZf007iIAswtAzUBmAKoHgJsLLgHQ8U9mwcuipFjwAEbvmgte1r93CxhANA40hrMD8GkYeBQrUACnJ/WDo2RH/2od1z9VgAAiD4F9Omu+XPTcWtQ+bt9Z4MFKgQE4MaY/vFnTO/bHsQICMBV5vIxZCYBKZa0Kse90kAEgldkK4PDfxhIca0aOP3QJSPeKl17+9p0Jgd6JeujtsF0ARm4Zz/CsGf2bS7e1r5/cHCHkH8DDmPF63yyAT4aAlZhDAfx6w3ggZgGQfrvhQAD3l4G6s/kBUDcI3Ft2GIBv/8ssiGwAkLqvOAjA9fn1T3hyDYCud23eAQDiAFpHMg8gWwCk5ovrl8W8Azg3a855KwCQ6MGqbQCWo0D9OfPO3140di+gpY//ApaiNgE4dc284+zd4MEMagc1/XLdBgB3loDawewct0r0uI1GUV4BdI3aHziro6N5BDB23/6A1XTlHgOAF6RqGUB713HLgo/Fgc8u2B+smhrDiNWfwdNyn8CbRrfKZmKDM9Y53DcBrESB3yesO2dlELsTADYJ/leMbpY2anSGTO729EQPTcnooadlIyGI8XrgqcR2+dXuqgQEajPJ1qj0tHLIsmbleff243U5D7TIAKjHJtuGiWyqvlwVQqoawPYEAK/X/zwniPMyhMPtR7ICMGQxAKsKobQAyKiRiN1FSY1GZkeC1VMgZxrAax7GKBd0sxCox4baTKjTws4kmAtVBnFVToJrRk2FSggkajM5sNo4qbYBmR41K1cP2s7icABlKcGzIyHRJM200RkRPWpW2smrDg0+hFaPnpUmegnFZuquMrbzWlIlGghhZyCEGYf86tOBIMp1g/coR4RXfIkqxtXW9Cal1l4ypLFd5/FMZRCbAkFUBEJorAyiKV+i69F1q/pRSn4onfsfCWEenuKgNy4AAAAASUVORK5CYII="
            alt="404 image"
          ></Image>

          <h1 className="text-4xl font-medium mt-3">404</h1>
          <p className="text-xl font-medium m-6">
            Oh no! .. the page you&apos;re looking for can&apos;t be found.
          </p>
          <Link href="/" className="btn btn-outline">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}
