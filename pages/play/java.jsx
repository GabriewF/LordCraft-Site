import Head from "next/head"

import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import LinkButton from "../../components/LinkButton"

const JavaPage = () => {
  const { t } = useTranslation("lang")

  return (
    <container>
      <Head>
        {/* Metadata */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="description" content={t("java.html.description")} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content={t("java.og.title")} />
        <meta property="og:description" content={t("java.og.description")} />
        <meta property="og:site_name" content={t("java.og.siteName")} />
        <meta property="og:url" content={t("java.og.url")} />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content={t("java.twitter.title")} />
        <meta
          name="twitter:description"
          content={t("java.twitter.description")}
        />
        <meta name="twitter:site" content={t("java.twitter.site")} />
        <meta name="twitter:url" content="https://www.lord-craft.tk" />
        <meta name="twitter:image" content="/CreeperFace.webp" />

        {/* Title */}
        <title>{t("java.page.title")}</title>
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
            {t("java.title.text")}
          </h1>
          <p className="font-MinecraftFiveBold animate-text-start text-2.5vw flex justify-center content-center text-slate-200">
            {t("java.title.description")}
          </p>

          {/* Java Address */}
          <div id="javaAddress" className="mt-4">
            {/* Java */}
            <p className="font-MinecraftFiveBold text-3vw flex justify-center content-center text-slate-200">
              <button className="bg-gray-50 hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded inline-flex cursor-not-allowed">
                <span className="text-1.5vw font-MinecraftFiveBold">
                  {t("java.edition.ip")}
                </span>
              </button>
            </p>
          </div>

          <div id="linkButtons">
            <p className="font-MinecraftFiveBold text-3vw flex justify-center content-center text-slate-200">
              {/* Go back */}
              <LinkButton
                href={"/play"}
                intr={true}
                w={16}
                h={16}
                alt={"Voltar"}
                src={"/images/BackIcon.webp"}
                text={t("java.button.back")}
              />
            </p>
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

export default JavaPage
