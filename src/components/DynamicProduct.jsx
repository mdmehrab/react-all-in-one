import React from "react";
import { useParams } from "react-router-dom";

export default function DynamicProduct() {
  const { productId } = useParams();

  //   console.log(params);
  return <div>DynamicProduct : {productId}</div>;
}
