const API_BASE = "https://swapi.dev/api";

export async function fetchStarships(page = 1, search = "") {
  const query = search ? `&search=${encodeURIComponent(search)}` : "";
  const res = await fetch(`${API_BASE}/starships/?page=${page}${query}`);
  if (!res.ok) throw new Error("Starships fetch failed!");
  return res.json();
}

export async function fetchStarshipDetail(id) {
  const res = await fetch(`${API_BASE}/starships/${id}/`);
  if (!res.ok) throw new Error("Starship detail fetch failed!");
  return res.json();
}
