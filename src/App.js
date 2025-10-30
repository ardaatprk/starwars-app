import React, { useState } from 'react';
import StarshipList from './components/StarshipList';
import StarshipDetail from './components/StarshipDetail';
import { fetchStarshipDetail } from './api/starships';

function App() {
  const [selectedId, setSelectedId] = useState(null);
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSelect(id) {
    setSelectedId(id);
    setLoading(true);
    const data = await fetchStarshipDetail(id);
    setDetail(data);
    setLoading(false);
  }

  function handleBack() {
    setSelectedId(null);
    setDetail(null);
    setLoading(false);
  }

  return (
    <div style={{background:'#121629', minHeight:'100vh'}}>
      {!selectedId && (
        <StarshipList onSelect={handleSelect} />
      )}
      {selectedId && (loading ? <div style={{color:'#fff',textAlign:'center', padding:88}}>Yükleniyor...</div> : <StarshipDetail data={detail} onBack={handleBack} />)}
    </div>
  );
}

export default App;
