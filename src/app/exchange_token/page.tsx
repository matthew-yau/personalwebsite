"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function ExchangeTokenPage() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const [status, setStatus] = useState("Exchanging token...");

  useEffect(() => {
    if (!code) return;

    fetch("/api/strava-token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.access_token) {
          console.log("Access Token:", data.access_token);
          setStatus("✅ Token received! You are connected to Strava.");
        } else {
          console.error("Token exchange error:", data);
          setStatus("❌ Token exchange failed.");
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        setStatus("🚨 Something went wrong.");
      });
  }, [code]);

  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold">{status}</h1>
    </div>
  );
}
