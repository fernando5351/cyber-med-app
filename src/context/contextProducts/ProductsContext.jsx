import React, { createContext, useEffect, useState } from "react";
import { serviceProduct } from "./serviceProducts";

export const MedContext = createContext();
const Serviceproduct = new serviceProduct();

const ProductsContext = (props) => {
  const [meds, setMeds] = useState([]);
  const [viewMeds, setViewMeds] = useState([]);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    Serviceproduct.readAll().then((data) => setMeds(data));
  }, []);

  const viewMed = (id) => {
    Serviceproduct.readProduct(id).then((data) => setViewMeds(data));
  };

  const createKarts = (carrito) => {
    Serviceproduct
      .createKart(carrito)
      .then((data) => setCarrito([...carrito, data]));
  };

  const readKarts = (id) => {
    Serviceproduct.readKart(id).then((data) => console.log(data));
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
