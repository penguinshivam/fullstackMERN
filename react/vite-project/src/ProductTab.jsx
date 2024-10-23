import Product from "./Product";

export default function ProductTab() {
  let styles={
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"center",
    alignItem:"center"
  };
  return (
    <div style={styles}> 
      <Product title="Logitech MX Master" idx={0}/>
      <Product title="Apple Pencil" idx={1}/>
      <Product title="Zebronics Zeb" idx={2}/>
      <Product title="Petronics Toad" idx={3}/>
    </div>
  );
}
