import React, { useEffect, useState } from "react";
import { fetchStarships } from "../api/starships";
import StarshipCard from "./StarshipCard";
import LoadMoreButton from "./LoadMoreButton";

function getIdFromUrl(url) {
  const parts = url.split("/");
  return parts[parts.length - 2];
}

function StarshipList({ onSelect }) {
  const [starships, setStarships] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    setStarships([]);
    setPage(1);
    loadStarships(1, search, true);
    // eslint-disable-next-line
  }, [search]);

  async function loadStarships(page, search, replace = false) {
    setLoading(true);
    try {
      const data = await fetchStarships(page, search);
      setStarships(prev => replace ? data.results : [...prev, ...data.results]);
      setHasMore(Boolean(data.next));
      setPage(page);
    } finally {
      setLoading(false);
    }
  }

  function handleSearch(e) {
    e.preventDefault();
    setSearch(searchInput);
  }

  function handleLoadMore() {
    loadStarships(page + 1, search);
  }

  return (
    <div style={{maxWidth: 1200, margin:'0 auto', paddingTop: 30}}>
      <h1 style={{fontFamily: 'Star Wars, Arial Black', color:'#ffe347', letterSpacing:2, marginBottom: 14, textAlign:'center'}}>STAR WARS Yıldız Gemileri</h1>
      <form onSubmit={handleSearch} style={{marginBottom:30, display:'flex', justifyContent:'center', gap:8}}>
        <input
          type="text"
          placeholder="Ad / Model Ara..."
          value={searchInput}
          onChange={e => setSearchInput(e.target.value)}
          style={{fontSize:18, padding:8, borderRadius:5, border:'1px solid #aaa'}}
        />
        <button type="submit" style={{fontSize:18, padding:'9px 18px', background:'#232946', color:'#fff', border:'none', borderRadius:5}}>
          Filtrele
        </button>
      </form>
      <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
        {starships.map(ship => (
          <StarshipCard key={ship.url} starship={ship} onClick={() => onSelect(getIdFromUrl(ship.url))} />
        ))}
      </div>
      {hasMore && (
        <LoadMoreButton onClick={handleLoadMore} disabled={loading} />
      )}
      {loading && <div>Yükleniyor...</div>}
    </div>
  );
}

export default StarshipList;
