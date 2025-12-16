import Image from "next/image";
import Main from "./home/Main";
import Head from "next/head";
import { useEffect } from "react";


export default function Home(props) {
  const { ageGroups } = props;
  useEffect(() => {
    if (ageGroups && ageGroups.length) {
      localStorage && localStorage.setItem("menu", JSON.stringify(ageGroups));
    }
  }, [ageGroups]);

  return (
    <>
      <Head>
        {/* Primary SEO */}
        <title>
          Blue Halo Health | Virtual Mental Health Care Ontario
        </title>

        <meta
          name="description"
          content="Blue Halo Health provides virtual-first, multidisciplinary mental and developmental healthcare across Ontario, including speech therapy, behavioural therapy, psychology, and neurodevelopmental support for all ages."
        />

        <meta
          name="keywords"
          content="virtual mental health Ontario, speech therapy Ontario, behavioural therapy, psychology services Canada, neurodevelopmental care, virtual healthcare Ontario, Blue Halo Health"
        />

        <meta name="robots" content="index, follow" />
        <meta name="author" content="Blue Halo Health" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Expert Virtual Mental & Developmental Care Across Ontario | Blue Halo Health"
        />
        <meta
          property="og:description"
          content="Multidisciplinary, virtual-first mental and developmental care serving all of Ontario — speech therapy, behavioural therapy, psychology, and in-home support when needed."
        />
        <meta
          property="og:image"
          content="https://blue-halo-health-next-js.vercel.app/summary.png"
        />
        <meta
          property="og:url"
          content="https://blue-halo-health-next-js.vercel.app/"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Virtual-First Mental & Developmental Care in Ontario | Blue Halo Health"
        />
        <meta
          name="twitter:description"
          content="Ontario-wide virtual mental health, behavioural therapy, and neurodevelopmental care — with in-home options when needed."
        />
        <meta
          name="twitter:image"
          content="https://blue-halo-health-next-js.vercel.app/summary.png"
        />

        {/* UX / Branding */}
        <meta name="theme-color" content="#009C4A" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>
      <Main />
    </>
  );
}

export async function getServerSideProps(context) {
  const host = context.req.headers.host;
  const API_URL = host.includes("localhost")
    ? "http://localhost:5000/api"
    : "https://blue-halo-health-backend.vercel.app/api";
  const res = await fetch(`${API_URL}/agegroup/list`);

  const text = await res.text();
  console.log("RAW RESPONSE:", text);

  let ageGroups = [];
  try {
    ageGroups = JSON.parse(text);
  } catch (err) {
    console.error("JSON PARSE ERROR", err);
  }

  return {
    props: {
      ageGroups: ageGroups?.ageGroupList || []
    },
  };
}

