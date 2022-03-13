import Head from "next/head";
import LinkButton from "../components/LinkButton"

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const IndexPage = () => {
  const {t} = useTranslation("lang");

  return (
    <container>
      <Head>
        {/* Metadata */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="description" content={t("index.html.description")} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content={t("index.og.title")} />
        <meta property="og:description" content={t("index.og.description")} />
        <meta property="og:site_name" content={t("index.og.siteName")} />
        <meta property="og:url" content={t("index.og.url")} />
        <meta property="og:type" content="website" />

        <meta name="twitter:title" content={t("index.twitter.title")} />
        <meta name="twitter:description" content={t("index.twitter.description")} />
        <meta name="twitter:site" content={t("index.twitter.site")} />
        <meta name="twitter:url" content="https://www.lord-craft.tk" />
        <meta name="twitter:image" content="/CreeperFace.webp" />

        {/* Title */}
        <title>{t("index.page.title")}</title>
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
            {t("index.title.text")}
          </h1>
          <p className="font-MinecraftFiveBold text-2.5vw flex justify-center content-center text-slate-200">
            {t("index.title.description")}
          </p>

          {/* Link Buttons */}
          <div id="linkButtons" className="">
            <p className="font-MinecraftFiveBold text-3vw flex justify-center content-center text-slate-200">
              <LinkButton
                href={"/play"}
                intr={true}
                w={16}
                h={16}
                alt={"Creeper"}
                src={"/images/CreeperIcon.webp"}
                text={t("index.button.play")}
              />
              <LinkButton
                href={"/twitch"}
                intr={true}
                w={16}
                h={16}
                alt={"Twitch"}
                src={"/images/TwitchIcon.webp"}
                text={t("index.button.twitch")}
                styles={"ml-3"}
              />
              {/* Youtube */}
              <LinkButton
                href={
                  "https://www.youtube.com/channel/UChVBw8q75tPAdRkfWWgNm0w"
                }
                intr={false}
                w={21}
                h={16}
                alt={"YouTube"}
                src={"/images/YouTubeIcon.webp"}
                text={t("index.button.youtube")}
                styles={"ml-3"}
              />
              {/* Github */}
              <LinkButton
                href={"https://www.github.com/gabriewf/LordCraft-Site"}
                intr={false}
                w={16}
                h={16}
                alt={"GitHub"}
                src={"/images/GitHubIcon.webp"}
                text={t("index.button.github")}
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
