import React from "react";
import ProductsContext from "../../../context/contextProducts/ProductsContext";
import Home from "../Home";

function ContextHome() {
  return (
    <ProductsContext>
      <Home />
    </ProductsContext>
  );
}

export default ContextHome;
