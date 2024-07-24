import React from "react";
import { useFilterContext } from "../context/FilterContext";
import GridView from "./GridView";

function ProductList() {
  const { filter_products, setGridView } = useFilterContext();

  if (setGridView) {
    return <GridView products={filter_products} />;
  }
  if (setGridView === false) {
    return <ListView products={filter_products} />;
  }
}

export default ProductList;
