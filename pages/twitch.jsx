import Head from "next/head";

import { TwitchPlayer } from 'react-twitch-embed';

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import LinkButton from "../components/LinkButton";

const IndexPage = () => {
  const { t } = useTranslation("lang");

  return (
    <container>
      <Head>
        {/* Metadata */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="description" content={t("twitch.html.description")} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content={t("twitch.og.title")} />
        <meta property="og:description" content={t("twitch.og.description")} />
        <meta property="og:site_name" content={t("twitch.og.siteName")} />
        <meta property="og:url" content={t("twitch.og.url")} />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content={t("twitch.twitter.tile")} />
        <meta name="twitter:description" content={t("twitch.twitter.description")} />
        <meta name="twitter:site" content={t("twitch.twitter.site")} />
        <meta name="twitter:url" content="https://www.lord-craft.tk" />
        <meta name="twitter:image" content="/CreeperFace.webp" />

        {/* Title */}
        <title>{t("twitch.page.title")}</title>
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
            {t("twitch.title.text")}
          </h1>
          <p className="font-MinecraftFiveBold text-2.5vw flex justify-center content-center text-slate-200">
            {t("twitch.title.description")}
          </p>

          <div id="twitch" className="mt-4 mb-4 bg-slate-800 border-solid border-8 border-slate-800">
            <TwitchPlayer
              channel="LordLIVE_"
              id="LordLIVE_"
              height="95.4vh"
              width="100%"
            />
          </div>

          {/* Link Buttons */}
          <div id="linkButtons" className="">
            <p className="font-MinecraftFiveBold text-3vw flex justify-center content-center text-slate-200">
              {/* Go back */}
              <LinkButton
                href={"/"}
                intr={true}
                w={16}
                h={16}
                alt={"Voltar"}
                src={"/images/BackIcon.webp"}
                text={t("twitch.button.back")}
              />
              {/* Twitch */}
              <LinkButton
                href={"https://www.twitch.tv/LordLIVE_?tt_content=twitch_logo&tt_medium=embed"}
                intr={false}
                w={16}
                h={16}
                alt={"Twitch"}
                src={"/images/TwitchIcon.webp"}
                text={t("twitch.button.twitch")}
                styles={"ml-3"}
              />
            </p>
          </div>
        </div>
      </div>
    </container>
  );
};

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, "lang")),
    },
  };
};

export default IndexPage
