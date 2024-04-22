export default async function getAllProviders() {
  try {
    const res = await fetch("http://localhost:8000/api/v1/providers/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await res.json();
    console.log(json);

    if (!res.ok) {
      return [];
    }

    return json;
  } catch (err) {
    console.log(err);
    return [];
  }
}
