import Product from "./Product";

export default function ProductTab() {
  let options = ["hi-tech", "fast"];
//   let option2 = ["hi-tech", "fast"];
  return (
    <>
      <Product
        title="Title"
        price={100}
        features={options}
      />
      {/* <Product title="new" price={100} />
      <Product title="new" price={100} /> */}
    </>
  );
}
