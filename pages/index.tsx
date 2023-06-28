
import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {

  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="../public/favicon.ico" />
        <title>
          WiiQare Dashboard
        </title>
      </Head>
      <Layout />
    </div>
  );
}
