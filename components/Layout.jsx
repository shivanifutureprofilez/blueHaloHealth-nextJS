import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import { useRouter } from "next/router";

function Layout({ children }) {

    const router = useRouter();
    console.log("roter", router);

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
    const fullUrl = `${siteUrl}${router.asPath}`;

    return (
        <>

        <Head> 
            <title>Blue Halo Health | Virtual Mental Health Care Ontario</title>
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
            <meta property="og:title" content="Expert Virtual Mental & Developmental Care Across Ontario | Blue Halo Health" />
            <meta property="og:description" content="Multidisciplinary, virtual-first mental and developmental care serving all of Ontario — speech therapy, behavioural therapy, psychology, and in-home support when needed."
            />
            <meta property="og:image" content="/summary.png" />
            <meta property="og:url" content={fullUrl} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta
            name="twitter:title"
            content="Virtual-First Mental & Developmental Care in Ontario | Blue Halo Health"
            />
            <meta name="twitter:description" content="Ontario-wide virtual mental health, behavioural therapy, and neurodevelopmental care — with in-home options when needed." />
            <meta name="twitter:image" content="/summary.png" />
            <meta name="theme-color" content="#009C4A" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <link rel="canonical" href={fullUrl} />

      </Head>


            <Header />
            <main>
            {children}
            </main>
            <Footer bg={"bg-black"} text={"text-white"}/>
        </>
    );
}

export default Layout;