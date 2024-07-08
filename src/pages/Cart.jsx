// global context

import { useGlobalContext } from "../hooks/useGlobalContext";

import { TableItem } from "../components";

function Cart() {
  const { products, totalProducts, addToCart } = useGlobalContext();

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
              return <TableItem key={prod.id} prod={prod} />;
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
