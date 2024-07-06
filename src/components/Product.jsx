import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <Link
      to={`/SingleProduct/${product.id}`}
      className="card bg-base-100 w-full shadow-xl"
    >
      <figure>
        <img src={product.thumbnail} alt={product.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p>{product.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </Link>
  );
}

export default Product;
