function ColorPanel({colorMode, colorValues}) {

  let panelStyle = {
    height: '200px',
    width: '200px',
    margin: 'auto',
    border: '1px solid black',
  };

  if (colorMode === 'rgb') {
    panelStyle.backgroundColor = `rgb(${colorValues[0]}, ${colorValues[1]}, ${colorValues[2]})`;
  } else {
    panelStyle.backgroundColor = `hsl(${colorValues[0]}, ${colorValues[1]}%, ${colorValues[2]}%)`;
  }

  return (
    <div className='color-panel' style={panelStyle}></div>
  );
}

export default ColorPanel;