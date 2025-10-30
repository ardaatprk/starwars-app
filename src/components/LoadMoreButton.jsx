import React from "react";

function LoadMoreButton({ onClick, disabled }) {
  return (
    <button style={{padding: '10px 32px', fontSize: 18, background:'#fffffe', color:'#232946', border:'none', borderRadius:6, margin:'22px 0', cursor:'pointer'}} disabled={disabled} onClick={onClick}>
      Daha Fazla
    </button>
  );
}

export default LoadMoreButton;
