import React from "react";

function getIdFromUrl(url) {
  const parts = url.split("/").filter(Boolean);
  return parts[parts.length - 1];
}

const DEFAULT_IMAGE = process.env.PUBLIC_URL + "/starship.jpg";

function StarshipDetail({ data, onBack }) {
  if (!data) return null;
  // Sadece local görsel kullanılacak:
  const imageUrl = DEFAULT_IMAGE;
  return (
    <div
      style={{
        padding: 32,
        background: "#232946",
        color: "#fff",
        borderRadius: 16,
        maxWidth: 500,
        margin: "40px auto",
      }}
    >
      <button style={{ marginBottom: 16 }} onClick={onBack}>
        Geri Dön
      </button>
      <h2>{data.name}</h2>
      <img
        src={imageUrl}
        alt={data.name}
        style={{
          width: 250,
          height: 180,
          display: "block",
          margin: "0 auto 18px",
          borderRadius: 12,
          background: '#fff',
          border: '2px solid #ffe347',
          objectFit: 'contain'
        }}
      />
      <ul style={{ listStyle: "none", padding: 0, textAlign: "left" }}>
        <li>
          <b>Model:</b> {data.model}
        </li>
        <li>
          <b>Hiperuzay Hızı:</b> {data.hyperdrive_rating}
        </li>
        <li>
          <b>Yolcu:</b> {data.passengers}
        </li>
        <li>
          <b>Max Atmosferik Hız:</b> {data.max_atmosphering_speed}
        </li>
        <li>
          <b>Üretici:</b> {data.manufacturer}
        </li>
        <li>
          <b>Mürettebat:</b> {data.crew}
        </li>
        <li>
          <b>Kargo Kapasitesi:</b> {data.cargo_capacity}
        </li>
      </ul>
    </div>
  );
}

export default StarshipDetail;
