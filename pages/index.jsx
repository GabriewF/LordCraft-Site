import Head from "next/head"
import Link from "next/link"

export default function Home() {
  return (
    <container>
      <Head>
        {/* Metadata */}
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="Site oficial" />
        <meta
          property="og:description"
          content="O 'LordCraft' é um servidor survival na ultima versão do Minecraft, com propiedade do streamer LordLIVE_ e é hospedado pela PurpleHost"
        />
        <meta property="og:site_name" content="LordCraft" />
        <meta property="og:url" content="https://www.lord-craft.tk/"></meta>
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Site oficial" />
        <meta
          name="twitter:description"
          content="O 'LordCraft' é um servidor survival na ultima versão do Minecraft, com propiedade do streamer LordLIVE_ e é hospedado pela PurpleHost"
        />
        <meta name="twitter:site" content="@LordCraft" />
        <meta name="twitter:url" content="https://www.lord-craft.tk" />
        <meta name="twitter:image" content="../public/creeper.webp" />

        {/* Title */}
        <title>Pagina inicial | LordCraft</title>
      </Head>
      <div id="container">
        <nav className="bg-gradient-to-r from-purple-900 to-pink-900 px-2 sm:px-4 py-2.5 rounded">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <Link href="/" className="flex items-center">
              <a className="text-2xl font-['MinecraftFiveBold'] self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                LordCraft
              </a>
            </Link>
            <button
              data-collapse-toggle="mobile-menu"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
              {/* <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                <li>
                  <Link href="#">
                    <a
                      className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      aria-current="page"
                    >
                      Pagina Inicial
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                      Sobre
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                      Serviçõs
                    </a>
                  </Link>
                </li>
              </ul> */}
            </div>
          </div>
        </nav>
        <div
          id="title"
          className="bg-gradient-to-r from-sky-700 to-indigo-700 p-24 m-5 rounded-lg "
        >
          <h1 className="font-['MinecraftTen'] text-7xl flex justify-center content-center">
            LordCraft 1.18.2
          </h1>
          <p className="font-['MinecraftFiveBold'] text-5xl flex justify-center content-center">
            Um servidor no Minecraft!
          </p>
        </div>
      </div>
    </container>
  )
}
