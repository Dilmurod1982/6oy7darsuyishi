import { useLoaderData } from "react-router-dom";
import { customFetch } from "../utils";
import { useState } from "react";
import { useGlobalContext } from "../hooks/useGlobalContext";

export const loader = async ({ params }) => {
  const request = await customFetch(`${params.id}`);
  const product = request.data;

  return { product };
};

function SingleProduct() {
  const { addToCart } = useGlobalContext();
  const { product } = useLoaderData();

  const [amount, setAmount] = useState(0);

  const handleAddToCart = () => {
    const newProduct = {
      ...product,
      amount,
    };
    addToCart(newProduct);
  };

  return (
    <div className="align-elements">
      <h2>{product.title}</h2>
      <div className="flex  items-center gap-5">
        <button
          onClick={() => setAmount((prev) => (prev += 1))}
          className="btn btn-primary"
        >
          +
        </button>
        <p className="text-2xl">{amount}</p>
        <button
          disabled={amount === 0}
          onClick={() => setAmount((prev) => (prev -= 1))}
          className="btn btn-primary"
        >
          -
        </button>
        <button onClick={handleAddToCart} className="btn btn-secondary">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default SingleProduct;
