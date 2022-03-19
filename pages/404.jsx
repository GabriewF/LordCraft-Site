import Head from "next/head"

import { useTranslation } from "next-i18next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"
import LinkButton from "../components/LinkButton"

const NotFound = () => {
  const { t } = useTranslation("lang")

  return (
    <container>
      <Head>
        {/* Metadata */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="description" content={t("notFound.html.description")} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content={t("notFound.og.title")} />
        <meta
          property="og:description"
          content={t("notFound.og.description")}
        />
        <meta property="og:site_name" content={t("notFound.og.siteName")} />
        <meta property="og:url" content={t("notFound.og.url")} />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content={t("notFound.twitter.title")} />
        <meta
          name="twitter:description"
          content={t("notFound.twitter.description")}
        />
        <meta name="twitter:site" content={t("notFound.twitter.site")} />
        <meta name="twitter:url" content="https://www.lord-craft.tk" />
        <meta name="twitter:image" content="/CreeperFace.webp" />

        {/* Title */}
        <title>{t("notFound.page.title")}</title>
      </Head>
      <div id="Container">
        <section>
          <div
            id="bg"
            className="w-screen h-screen animation-pulse bg-gradient-to-r from-sky-500 to-indigo-500 dark:bg-gradient-to-r dark:from-sky-700 dark:to-indigo-700 grid grid-cols-1 gap-2 place-content-center"
          >
            <div id="title" className="text-5vw">
              <h1 className="font-MinecraftFiveBold flex justify-center items-center text-justify text-slate-200">
                {t("notFound.title.text")}
              </h1>
              <p className="font-MinecraftTen flex justify-center items-center text-justify text-slate-200">
                {t("notFound.title.description")}
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
                    text={t("notFound.button.back")}
                  />
                </p>
              </div>
            </div>
          </div>
        </section>
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

export default NotFound
