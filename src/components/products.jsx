import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cart-slice";
import Card from "./card";
import { fetchProducts, STATUSES } from "../store/product-slice";

const Products = () => {
  const { status, products } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleAdd = function (product) {
    dispatch(add(product));
  };

  return (
    <div>
      {status === STATUSES.LOADING ? <div>Loading.....</div> : <></>}
      {status === STATUSES.IDLE ? (
        <div className="productsWrapper">
          {products.map((product) => (
            <Card
              product={product}
              key={product.id}
              onButtonClick={handleAdd}
              buttonText={"Add to cart"}
            />
          ))}
        </div>
      ) : (
        <></>
      )}
      {status === STATUSES.ERROR ? (
        <div>Failed to fetch products please refresh again.....</div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Products;
