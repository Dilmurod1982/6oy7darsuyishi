import { useLoaderData } from "react-router-dom";
import Product from "./Product";

function ProductList() {
  const {
    products: { products },
  } = useLoaderData();

  return (
    <div className="grid grid-cols-3 gap-5">
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
}

export default ProductList;
