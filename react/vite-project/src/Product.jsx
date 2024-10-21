import "./Product.css";
import Price from "./Price";

export default function Product({ title, idx }) {
  let oldPrices = ["12,495", "11,900", "1,599", "599"];
  let newPrices = ["12,000", "11,000", "1,000", "300"];
  let description = [
    ["8,000 DPI","5 Programmable buttons"],
    ["intutive surface","disigned for ipad pro"],
    ["disigned for ipad pro","intutive surface"],
    ["wireless","disigned for ipad pro"]
  ];
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <p>{description[idx][2]}</p>
      <p>{description[idx][3]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}></Price>
    </div>
  );
}
