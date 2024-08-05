import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
  const cart = useSelector((store) => store.cart);
  const { cartProducts } = cart;
  return (
    <div className="navbar-container">
      <div className="logo">Redux Store</div>
      <div className="navbar-items">
        <Link className="nav-link" to={"/"}>
          Home
        </Link>
        <Link className="nav-link" to={"/cart"}>
          Cart
        </Link>
        <span className="cart-count">
          Cart items: {cartProducts?.length ?? 0}
        </span>
      </div>
    </div>
  );
}

export default Navbar;
