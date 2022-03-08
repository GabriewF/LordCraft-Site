import Head from "next/head"

export default function Home() {
  return (
    <>
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
        <title>Pagina inicial | LordCraft</title>
      </Head>
      <div id="container">
        <div id="title" className="mt-4">
          <h1 className="text-7xl flex justify-center content-center">
            LordCraft 1.18.2
          </h1>
          <p className="text-5xl flex justify-center content-center">
            Um servidor no Minecraft!
          </p>
        </div>

        <bl />

        <p className="text-2xl mt-5 flex justify-center content-center">
          Bahiano master google.com proprey brabo 5k proprey!
        </p>
      </div>
    </>
  )
}
