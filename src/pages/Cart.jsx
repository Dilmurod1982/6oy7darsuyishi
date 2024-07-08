// global context

import { useGlobalContext } from "../hooks/useGlobalContext";

import { FaTrashAlt } from "react-icons/fa";

function Cart() {
  const { products, totalProducts, addToCart } = useGlobalContext();
  console.log(products, totalProducts);
  return (
    <div className="align-elements mt-10">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Title</th>
              <th>Price</th>
              <th>Change Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {products.map((prod) => {
              return (
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={prod.thumbnail} alt={prod.title} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{prod.title}</div>
                        <div className="text-sm opacity-50">{prod.brand}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    ${prod.price}
                    <br />
                    <span className="badge badge-accent badge-sm">
                      Disount: {prod.discountPercentage}%
                    </span>
                  </td>
                  <td className="flex items-center gap-2">
                    <button onClick={()=>addToCart(prod)} className="btn btn-info btn-sm">+</button>
                    <p>{prod.amount}</p>
                    <button className="btn btn-info btn-sm">-</button>
                  </td>
                  <th>
                    <button className="btn  btn-xs">
                      <FaTrashAlt className="w-5 h-5" />
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Price</th>
              <th>Change Amount</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default Cart;
