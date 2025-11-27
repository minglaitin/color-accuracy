function ColorPanel({colorMode, r, g, b}) {

  let panelStyle = {
    height: '200px',
    width: '200px',
    margin: 'auto',
    border: '1px solid black',
  };

  if (colorMode === 'rgb') {
    panelStyle.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }

  return (
    <>
    <div className='color-panel' style={panelStyle}></div>
    </>
  );
}

export default ColorPanel;