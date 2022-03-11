import { Html, Head, Main, NextScript, Meta } from "next/document"

const Document = () => {

  return (
    <Html>
      <Head>
        {/* Ícones */}
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/images/favicon.ico"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.webp"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.webp"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/images/favicon-96x96.webp"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/images/android-icon-192x192.webp"
        />

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/images/apple-icon-57x57.webp"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/images/apple-icon-60x60.webp"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/images/apple-icon-72x72.webp"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/images/apple-icon-76x76.webp"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/images/apple-icon-114x114.webp"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/images/apple-icon-120x120.webp"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/images/apple-icon-144x144.webp"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/images/apple-icon-152x152.webp"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-icon-180x180.webp"
        />
      </Head>
      <body className="animate-start animate-text-start dark:text-gray-200 dark:bg-zinc-900 bg-gray-200 text-zinc-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document
