import { Html, Head, Main, NextScript, Meta } from "next/document"

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        {/* Metadata */}
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="Site oficial" />
        <meta property="og:description" content="O 'LordCraft' é um servidor survival na ultima versão do Minecraft, com propiedade do streamer LordLIVE_ e é hospedado pela PurpleHost" />
        <meta property="og:site_name" content="LordCraft" />
        <meta property="og:url" content="https://www.lord-craft.tk/"></meta>
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content="Site oficial" />
        <meta name="twitter:description" content="O 'LordCraft' é um servidor survival na ultima versão do Minecraft, com propiedade do streamer LordLIVE_ e é hospedado pela PurpleHost" />
        <meta name="twitter:site" content="@LordCraft" />
        <meta name="twitter:url" content="https://www.lord-craft.tk" />
        <meta name="twitter:image" content="../public/creeper.webp" />
        
        {/* Ícones */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />

        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.webp" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.webp" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.webp" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.webp" />
        
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.webp" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.webp" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.webp" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.webp" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.webp" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.webp" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.webp" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.webp" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.webp" />
      </Head>
      <body className="text-gray-200 bg-zinc-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
