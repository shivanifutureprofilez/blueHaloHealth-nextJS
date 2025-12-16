// lib/serverApi.js
import { headers } from "next/headers";

export function getServerApiUrl() {
  const host = headers().get("host");

  if (host?.includes("localhost")) {
    return "http://localhost:5000/api";
  }

  return "https://api.yoursite.com/api";
}
