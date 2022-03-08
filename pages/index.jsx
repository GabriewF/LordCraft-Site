import Head from "next/head"

export default function Home() {
  return (
    <div id="container">
      <Head>
        <title>Pagina inicial | LordCraft</title>
      </Head>

      <div id="title">
        <h1 className="text-7xl flex justify-center content-center">
          LordCraft 1.18.2
        </h1>
        <p className="text-5xl flex justify-center content-center">
          Um servidor no Minecraft!
        </p>
      </div>

      <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
        Save Changes
      </button>
    </div>
  )
}
