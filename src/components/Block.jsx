function Block(props) {
  const nameColor = props.block;
  function pushblock() {
    if (nameColor == "yellow") {
      return "yellow";
    } else if (nameColor == "green") {
      return "green";
    } else if (nameColor == "color") {
      return "lime";
    } else {
      return "red";
    }
  }

  const myStyle = {
    color: "red",
    backgroundColor: pushblock(),
    width: "100px", 
    height: "100px",
    margin: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <>
      <div style={myStyle}>{pushblock()}</div>
    </>
  );
}

export default Block;
