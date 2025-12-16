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

