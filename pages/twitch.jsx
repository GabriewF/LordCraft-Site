import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { TwitchEmbed, TwitchChat, TwitchClip, TwitchPlayer } from 'react-twitch-embed';

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const IndexPage = () => {
  const { t } = useTranslation("twitch");

  return (
    <container>
      <Head>
        {/* Metadata */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="description" content={t("htmlDescription")} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content={t("ogTitle")} />
        <meta property="og:description" content={t("ogDescription")} />
        <meta property="og:site_name" content={t("ogSiteName")} />
        <meta property="og:url" content="https://www.lord-craft.tk"></meta>
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content={t("twitterTitle")} />
        <meta name="twitter:description" content={t("twitterDescription")} />
        <meta name="twitter:site" content={t("twitterSite")} />
        <meta name="twitter:url" content="https://www.lord-craft.tk" />
        <meta name="twitter:image" content="../public/creeper.webp" />

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
              <Link
                className="flex justify-center content-center text-slate-200"
                href="/"
              >
                <a
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  <button className="bg-gray-50 hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    <Image
                      className="fill-current w-4 h-4 mr-2"
                      width="16"
                      height="16"
                      alt="Creeper"
                      src="/images/back.svg"
                    />
                    <span className="ml-2 text-1.5vw font-MinecraftFiveBold">
                      {t("goBack")}
                    </span>
                  </button>
                </a>
              </Link>
              {/* Twitch */}
              <a
                href="https://www.twitch.tv/LordLIVE_"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                <button className="bg-gray-50 hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                  <Image
                    className="fill-current w-4 h-4 mr-2"
                    width="16"
                    height="16"
                    alt="Twitch"
                    src="/images/twitch.svg"
                  />
                  <span className="ml-2 text-1.5vw font-MinecraftFiveBold">
                    {t("twitchButton")}
                  </span>
                </button>
              </a>
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