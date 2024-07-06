import ProductList from "../components/ProductList";

import { customFetch } from "../utils";

export const loader = async () => {
  const request = await customFetch();
  const products = request.data;

  return { products };
};

function Home() {
  return (
    <div className="align-elements mt-10">
      <ProductList />
    </div>
  );
}

export default Home;
