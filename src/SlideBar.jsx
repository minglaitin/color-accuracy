const textBoxStyle = {
  width: '40px'
};

function SlideBar({ label, max, value, handleChange, disabled }) {
  return (
    <div>
      <span>{label}</span>
      <input type="range" min="0" max={max} value={value} onChange={handleChange} disabled={disabled} />
      <input type="number" min="0" max={max} value={value} onChange={handleChange} style={textBoxStyle} disabled={disabled} />
    </div>
  );
}

export default SlideBar;