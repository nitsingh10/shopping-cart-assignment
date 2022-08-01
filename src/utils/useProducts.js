import { useState, useEffect } from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import Products from "../../server/products/index.get.json";
import Categories from "../../server/categories/index.get.json";

const useProducts = () => {
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch("/products/:id");

  const filteredCategory = Categories.filter(
    (category) => category.enabled
  ).sort((a, b) => a.order - b.order);

  const [filteredProduct, setFilteredProduct] = useState(Products);

  const handleProduct = (id) => {
    if (id) {
      history.push(`/products/${id}`);
    } else {
      history.push(`/products`);
    }

    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (!match) {
      setFilteredProduct(Products);
    } else {
      setFilteredProduct(
        Products.filter((product) => product.category === match.params.id)
      );
    }
  }, [location]);

  return {
    filteredCategory,
    filteredProduct,
    handleProduct,
  };
};

export default useProducts;
