import Image from "next/image";
import Main from "./home/Main";
import Head from "next/head";


export default function Home() {
  return (
    <>
      <Head>
        <title>Blue Halo Health | Holistic Health & Wellness</title>
        <meta name="description" content="Blue Halo Health offers comprehensive holistic wellness services that empower you to achieve balance in mind, body, and spirit." />
        <meta name="keywords" content="Blue Halo Health, holistic health, wellness, functional medicine, nutrition, wellness programs" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Blue Halo Health" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bluehalohealth.com/" />
        <meta property="og:title" content="Blue Halo Health | Holistic Health & Wellness" />
        <meta property="og:description" content="Empowering your journey to holistic health with expert care, guidance, and resources." />
        <meta property="og:image" content="/summary.png" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://bluehalohealth.com/" />
        <meta name="twitter:title" content="Blue Halo Health | Holistic Health & Wellness" />
        <meta name="twitter:description" content="Discover holistic health programs designed for you." />
        <meta name="twitter:image" content="/summary.png" />

        {/* Performance & UX */}
        <link rel="canonical" href="https://bluehalohealth.com/" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color" content="#00D967" />
      </Head>
    <Main/> 
    </>
  );
}
