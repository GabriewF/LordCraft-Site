import {Head, Html, Main, NextScript} from "next/document"

const Document = () => {

  return (
    <Html>
      <Head>
        {/* Ícones */}
        <link rel="icon" type="image/x-icon" href="/images/Favicon.ico"/>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/images/Favicon.ico"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/Favicon@16.webp"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/Favicon@32.webp"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/images/Favicon@96.webp"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/images/Android@192.webp"
        />

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/images/Apple@57.webp"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/images/Apple@60.webp"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/images/Apple@72.webp"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/images/Apple@76.webp"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/images/Apple@114.webp"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/images/Apple@120.webp"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/images/Apple@144.webp"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/images/Apple@152.webp"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/Apple@180.webp"
        />
      </Head>
      <body className="animate-start animate-text-start dark:text-gray-200 dark:bg-zinc-900 bg-gray-200 text-zinc-900">
      <Main/>
      <NextScript/>
      </body>
    </Html>
  );
}

export default Document
