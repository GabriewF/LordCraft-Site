import {Head, Html, Main, NextScript} from "next/document"

const Document = () => {

  return (
    <Html>
      <Head>
        {/* Ícones */}
        <link
          rel="icon"
          type="image/x-icon"
          href="/_next/image?url=/images/Favicon.ico&w=64&q=75"
        />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/_next/image?url=/images/Favicon.ico&w=64&q=75"
        />

        <link
          rel="icon"
          type="image/webp"
          sizes="16x16"
          href="/_next/image?url=/images/Favicon@16.webp&w=16&q=75"
        />
        <link
          rel="icon"
          type="image/webp"
          sizes="32x32"
          href="/_next/image?url=/images/Favicon@32.webp&w=32&q=75"
        />
        <link
          rel="icon"
          type="image/webp"
          sizes="96x96"
          href="/_next/image?url=/images/Favicon@96.webp&w=96&q=75"
        />
        <link
          rel="icon"
          type="image/webp"
          sizes="192x192"
          href="/_next/image?url=/images/Android@192.webp&w=192&q=75"
        />

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/_next/image?url=/images/Apple@57.webp&w=57&q=75"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/_next/image?url=/images/Apple@60.webp&w=60&q=75"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/_next/image?url=/images/Apple@72.webp&w=72&q=75"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/_next/image?url=/images/Apple@76.webp&w=76&q=75"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/_next/image?url=/images/Apple@114.webp&w=114&q=75"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/_next/image?url=/images/Apple@120.webp&w=120&q=75"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/_next/image?url=/images/Apple@144.webp&w=144&q=75"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/_next/image?url=/images/Apple@152.webp&w=152&q=75"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/_next/image?url=/images/Apple@180.webp&w=180&q=75"
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
