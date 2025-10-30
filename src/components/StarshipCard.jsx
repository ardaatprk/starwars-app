import React from "react";

function getIdFromUrl(url) {
  const parts = url.split("/").filter(Boolean);
  return parts[parts.length - 1];
}

const DEFAULT_IMAGE = process.env.PUBLIC_URL + "/starship.jpg";

function StarshipCard({ starship, onClick }) {
  const id = getIdFromUrl(starship.url);
  // Sabit kendi görselimizi kullanıyoruz:
  const imageUrl = DEFAULT_IMAGE;
  return (
    <div
      onClick={onClick}
      style={{
        border: "1px solid #333",
        borderRadius: 10,
        padding: 16,
        margin: 8,
        cursor: "pointer",
        background: "#232946",
        color: "#fff",
        minWidth: 280,
      }}
    >
      <img
        src={imageUrl}
        alt={starship.name}
        style={{
          width: 200,
          height: 160,
          borderRadius: 10,
          background: '#fff',
          border: '2px solid #ffe347',
          display: 'block',
          margin: '0 auto 14px',
          objectFit: 'contain'
        }}
      />
      <h3>{starship.name}</h3>
      <div>Model: {starship.model}</div>
      <div>Hız: {starship.max_atmosphering_speed}</div>
    </div>
  );
}

export default StarshipCard;
