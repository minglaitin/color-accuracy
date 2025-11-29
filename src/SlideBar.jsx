const textBoxStyle = {
  width: '40px'
};

function SlideBar({ label, max, value, handleChange }) {
  return (
    <div>
      <span>{label}</span>
      <input type="range" min="0" max={max} value={value} onChange={handleChange} />
      <input type="number" min="0" max={max} value={value} onChange={handleChange} style={textBoxStyle} />
    </div>
  );
}

export default SlideBar;