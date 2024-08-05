import React from "react";
import Products from "../components/products";

function Home() {
  return (
    <div>
      <h2 className="heading">Welcome to Redux toolkit home</h2>
      <p>Products</p>
      <Products />
    </div>
  );
}

export default Home;
