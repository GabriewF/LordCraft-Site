import Head from "next/head"
import Link from "next/link"

import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import LinkButton from "../../components/LinkButton"

const PlayPage = () => {
  const { t } = useTranslation("lang")

  return (
    <container>
      <Head>
        {/* Metadata */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="description" content={t("play.html.description")} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content={t("play.og.title")} />
        <meta property="og:description" content={t("play.og.description")} />
        <meta property="og:site_name" content={t("play.og.siteName")} />
        <meta property="og:url" content={t("play.og.url")} />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content={t("play.twitter.title")} />
        <meta
          name="twitter:description"
          content={t("play.twitter.description")}
        />
        <meta name="twitter:site" content={t("play.twitter.site")} />
        <meta name="twitter:url" content="https://www.lord-craft.tk" />
        <meta name="twitter:image" content="/CreeperFace.webp" />

        {/* Title */}
        <title>{t("play.page.title")}</title>
      </Head>
      {/* Container */}
      <div id="container">
        {/* Title */}
        <div
          id="title"
          className="bg-gradient-to-r from-sky-500 to-indigo-500 dark:bg-gradient-to-r dark:from-sky-700 dark:to-indigo-700 p-24 m-5 rounded-lg "
        >
          {/* Title */}
          <h1 className="font-MinecraftTen text-5vw flex justify-center content-center text-slate-200">
            {t("play.title.text")}
          </h1>
          <p className="font-MinecraftFiveBold animate-text-start text-2.5vw flex justify-center content-center text-slate-200">
            {t("play.title.description")}
          </p>

          {/* Server Address */}
          <div id="serverAddress">
            <p className="font-MinecraftFiveBold text-3vw flex justify-center content-center text-slate-200">
              {/* Java */}
              <Link
                className="flex justify-center content-center text-slate-200"
                href="/play/java"
              >
                <a
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  <button className="bg-gray-50 hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    <span className="text-1.5vw font-MinecraftFiveBold">
                      {t("play.edition.java")}
                    </span>
                  </button>
                </a>
              </Link>

              {/* Bedrock */}
              <Link
                className="flex justify-center content-center text-slate-200"
                href="/play/bedrock"
              >
                <a
                  className="ml-3 block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  <button className="bg-gray-50 hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    <span className="text-1.5vw font-MinecraftFiveBold">
                      {t("play.edition.bedrock")}
                    </span>
                  </button>
                </a>
              </Link>
            </p>

            <div id="linkButtons">
              <p className="font-MinecraftFiveBold text-3vw flex justify-center content-center text-slate-200">
                {/* Go back */}
                <LinkButton
                  href={"/"}
                  intr={true}
                  w={16}
                  h={16}
                  alt={"Voltar"}
                  src={"/images/BackIcon.webp"}
                  text={t("play.button.back")}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </container>
  )
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, "lang")),
    },
  }
}

export default PlayPage
