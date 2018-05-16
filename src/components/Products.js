import React from "react";
import CollapsableMapper from "./CollapsableMapper";

function Products(props) {
  return (
    <CollapsableMapper data={props.products} field="name" />
  );
}
export default Products;
