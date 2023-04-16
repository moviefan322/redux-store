import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateCartQuantity } from "../../features/cart";
import { idbPromise } from "../../utils/helpers";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const onChange = (e) => {
    const value = e.target.value;
    if (value === "0") {
      dispatch(removeFromCart(item._id));
      idbPromise("cart", "delete", { ...item });
    } else {
      dispatch(
        dispatch(
          updateCartQuantity({
            _id: item._id,
            purchaseQuantity: parseInt(value),
          })
        )
      );
      idbPromise("cart", "put", { ...item, purchaseQuantity: parseInt(value) });
    }
  };

  return (
    <div className="flex-row">
      <div>
        <img src={`/images/${item.image}`} alt="" />
      </div>
      <div>
        <div>
          {item.name}, ${item.price}
        </div>
        <div>
          <span>Qty:</span>
          <input
            type="number"
            placeholder="1"
            value={cart[item._id].purchaseQuantity}
            onChange={onChange}
          />
          <span
            role="img"
            aria-label="trash"
            onClick={() => dispatch(removeFromCart(item._id))}
          >
            🗑️
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
