import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/card";
import { remove } from "../store/cart-slice";

const Cart = () => {
  const cart = useSelector((store) => store.cart);
  const { cartProducts } = cart;
  const dispatch = useDispatch();

  const handleRemove = (product) => {
    const { id } = product ?? {};
    dispatch(remove(id));
  };

  return (
    <div>
      <h1>Wecolme to Cart section</h1>
      {!cartProducts.length ? <div>No cart is added yet.....</div> : <></>}
      <div className="productsWrapper">
        {cartProducts.map((product) => {
          return (
            <Card
              product={product}
              onButtonClick={handleRemove}
              key={product.id}
              buttonText={"Remove from cart"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
