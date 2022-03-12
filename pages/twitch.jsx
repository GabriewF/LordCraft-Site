import Head from "next/head";

import {TwitchPlayer} from 'react-twitch-embed';

import {useTranslation} from "next-i18next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import LinkButton from "../components/LinkButton";

const IndexPage = () => {
  const {t} = useTranslation("twitch");

  return (
    <container>
      <Head>
        {/* Metadata */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
        <meta name="description" content={t("htmlDescription")}/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        <meta property="og:title" content={t("ogTitle")}/>
        <meta property="og:description" content={t("ogDescription")}/>
        <meta property="og:site_name" content={t("ogSiteName")}/>
        <meta property="og:url" content="https://www.lord-craft.tk"></meta>
        <meta property="og:type" content="website"/>

        <meta name="twitter:title" content={t("twitterTitle")}/>
        <meta name="twitter:description" content={t("twitterDescription")}/>
        <meta name="twitter:site" content={t("twitterSite")}/>
        <meta name="twitter:url" content="https://www.lord-craft.tk"/>
        <meta name="twitter:image" content="../public/CreeperFace.webp"/>

        {/* Title */}
        <title>{t("title")}</title>
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
            {t("titleText")}
          </h1>
          <p className="font-MinecraftFiveBold text-2.5vw flex justify-center content-center text-slate-200">
            {t("titleDesc")}
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
                text={t("goBack")}
              />
              {/* Twitch */}
              <LinkButton
                href={"https://www.twitch.tv/LordLIVE_?tt_content=twitch_logo&tt_medium=embed"}
                intr={false}
                w={16}
                h={16}
                alt={"Twitch"}
                src={"/images/TwitchIcon.webp"}
                text={t("twitchButton")}
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
      ...(await serverSideTranslations(locale, "twitch")),
    },
  };
};

export default IndexPage
