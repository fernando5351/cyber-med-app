import React, { createContext, useEffect, useState } from "react";
import { serviceProduct } from "./serviceProducts";

export const MedContext = createContext();
const serviceproduct = new serviceProduct();

const ProductsContext = (props) => {
  const [meds, setMeds] = useState([]);
  const [viewMeds, setViewMeds] = useState([]);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    serviceproduct.readAll().then((data) => setMeds(data));
  }, []);

  const viewMed = (id) => {
    serviceproduct.readProduct(id).then((data) => setViewMeds(data));
  };

  const createKarts = (carrito) => {
    serviceproduct
      .createKart(carrito)
      .then((data) => setCarrito([...carrito, data]));
  };

  const readKarts = (id) => {
    serviceproduct.readKart(id).then((data) => console.log(data));
    console.log(readKarts);
  };

  return (
    <MedContext.Provider
      value={{ meds, viewMed, viewMeds, carrito, createKarts, readKarts }}
    >
      {props.children}
    </MedContext.Provider>
  );
};

export default ProductsContext;
