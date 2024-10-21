export default function Price({ oldPrice, newPrice }) {
  let oldStyles = {
    textDecorationLine: "line-through",
  };
  let newStyle = {
    fontWeight: "bold",
  };
  let styles={
    backgroundColor:"#c0c367",
    height:"30px",
    borderBottomLeftRadius:"14px",
    borderBottomRightRadius:"14px"
  }
  return (
    <div style={styles}>
      <p>
        <span style={oldStyles}> {oldPrice}</span> &nbsp;&nbsp;&nbsp;
        <span style={newStyle}> {newPrice}</span>
      </p>
    </div>
  );
}
