import React from "react";
import { useSearchParams, useLocation } from "react-router-dom";

export const ProductList = () => {
  const [searchParams] = useSearchParams();
  // console.log(searchParams.get("q"));
  const location = useLocation();
  // console.log(location);

  return <div className="component">ProductList</div>;
};
