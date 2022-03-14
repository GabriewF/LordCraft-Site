import Head from "next/head";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import LinkButton from "../components/LinkButton";

const NotFound = () => {
  const { t } = useTranslation("lang");

  return (
    <container>
      <Head>
        {/* Metadata */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="description" content={ t("badRequest.html.description") } />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content={ t("badRequest.og.title") } />
        <meta property="og:description" content={ t("badRequest.og.description") } />
        <meta property="og:site_name" content={ t("badRequest.og.siteName") } />
        <meta property="og:url" content={ t("badRequest.og.url") } />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content={ t("badRequest.twitter.title") } />
        <meta name="twitter:description" content={ t("badRequest.twitter.description") } />
        <meta name="twitter:site" content={ t("badRequest.twitter.site") } />
        <meta name="twitter:url" content="https://www.lord-craft.tk" />
        <meta name="twitter:image" content="_next/image?url=/images/CreeperFace.webp&w=16h=16&q=75" />

        {/* Title */}
        <title>{ t("badRequest.page.title") }</title>
      </Head>
      <div id="Container">
        <section>
          <div
            id="bg"
            className="w-screen h-screen animation-pulse bg-gradient-to-r from-sky-500 to-indigo-500 dark:bg-gradient-to-r dark:from-sky-700 dark:to-indigo-700 grid grid-cols-1 gap-2 place-content-center"
          >
            <div id="title" className="text-5vw">
              <h1 className="font-MinecraftFiveBold flex justify-center items-center text-justify text-slate-200">
                { t("badRequest.title.text") }
              </h1>
              <p className="font-MinecraftTen flex justify-center items-center text-justify text-slate-200">
                { t("badRequest.title.description") }
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
                    text={ t("badRequest.button.back") }
                  />
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </container>
  );
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, "lang")),
    },
  };
};

export default NotFound
