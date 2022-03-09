import Head from "next/head"
import Link from "next/link"
import Image from 'next/image'

export default function Home() {
  return (
    <container>
      <Head>
        {/* Metadata */}
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
        <title>Java | LordCraft</title>
      </Head>
      {/* Container */}
      <div id="container">
        {/* Title */}
        <div
          id="title"
          className="bg-gradient-to-r from-sky-500 to-indigo-500 dark:bg-gradient-to-r dark:from-sky-700 dark:to-indigo-700 p-24 m-5 rounded-lg "
        >
          {/* Title */}
          <h1 className="font-['MinecraftTen'] text-5vw flex justify-center content-center text-slate-200">
            LordCraft 1.18.2
          </h1>
          <p className="font-['MinecraftFiveBold'] animate-text-start text-3vw flex justify-center content-center text-slate-200">
            Aqui está o IP do servidor Java!
          </p>

          {/* Java Address */}
          <div id="javaAddress" className="mt-4">
            {/* Java */}
            <p className="font-['MinecraftFiveBold'] text-3vw flex justify-center content-center text-slate-200">
              <button className="bg-gray-50 hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded inline-flex cursor-not-allowed">
                <span className="text-1.5vw font-['MinecraftFiveBold']">
                  java.lord-craft.tk
                </span>
              </button>
            </p>
          </div>

          <div id="linkButtons">
            <p className="font-['MinecraftFiveBold'] text-3vw flex justify-center content-center text-slate-200">
              {/* Go back */}
              <Link
                className="flex justify-center content-center text-slate-200"
                href="/jogar"
              >
                <a
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  <button className="bg-gray-50 hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    <Image
                      className="fill-current w-4 h-4 mr-2"
                      width="16"
                      height="16"
                      alt="Back"
                      src="/back.svg"
                    />
                    <span className="ml-2 text-1.5vw font-['MinecraftFiveBold']">
                      Voltar a pagina anterior
                    </span>
                  </button>
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </container>
  );
}
