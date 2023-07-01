
function BoxColor({r, g, b}) {
const divStyle = {
  backgroundColor: `rgb(${r}, ${g}, ${b})`,
  width: '300px',
  height: '100px'
}

return (
  <div style={divStyle}></div>
)
}

export default BoxColor;