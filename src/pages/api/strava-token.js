export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { code } = req.body;

  const client_id = process.env.STRAVA_CLIENT_ID;
  const client_secret = process.env.STRAVA_CLIENT_SECRET;

  try {
    const response = await fetch("https://www.strava.com/oauth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id,
        client_secret,
        code,
        grant_type: "authorization_code",
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("❌ Strava error:", data);
      return res.status(response.status).json(data);
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error("❌ Server error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
