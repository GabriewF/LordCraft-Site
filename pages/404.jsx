import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

export default function Custom404() {
  return (
    <container>
      <Head>
        {/* Metadata */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="404" />
        <meta property="og:description" content="O 'LordCraft' é um servidor survival na ultima versão do Minecraft, com propiedade do streamer LordLIVE_ e é hospedado pela PurpleHost" />
        <meta property="og:site_name" content="LordCraft" />
        <meta property="og:url" content="https://www.lord-craft.tk/404"></meta>
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="404" />
        <meta name="twitter:description" content="O 'LordCraft' é um servidor survival na ultima versão do Minecraft, com propiedade do streamer LordLIVE_ e é hospedado pela PurpleHost" />
        <meta name="twitter:site" content="@LordCraft" />
        <meta name="twitter:url" content="https://www.lord-craft.tk/404" />
        <meta name="twitter:image" content="../public/creeper.webp" />

        {/* Title */}
        <title>Pagina não encontrada | LordCraft</title>
      </Head>
      <div id="Container">
        <section>
          <div id="bg" className="w-screen h-screen animation-pulse bg-gradient-to-r from-sky-500 to-indigo-500 dark:bg-gradient-to-r dark:from-sky-700 dark:to-indigo-700 grid grid-cols-1 gap-2 place-content-center">
            <div id="title" className="text-5vw">
              <h1 className="font-['MinecraftFiveBold'] flex justify-center items-center text-justify text-slate-200">
                404
              </h1>
              <p className="font-['MinecraftTen'] flex justify-center items-center text-justify text-slate-200">
                Pagina não encontrada
              </p>

              <div id="linkButtons">
                <p className="font-['MinecraftFiveBold'] text-3vw flex justify-center content-center text-slate-200">
                  {/* Go back */}
                  <Link className="flex justify-center content-center text-slate-200" href="/">
                    <a className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">
                      <button className="bg-gray-50 hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <Image className="fill-current w-4 h-4 mr-2" width="16" height="16" alt="Back" src="/back.svg" />
                        <span className="ml-2 text-1.5vw font-['MinecraftFiveBold']">
                          Voltar a pagina inicial
                        </span>
                      </button>
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </container>
  )
}
