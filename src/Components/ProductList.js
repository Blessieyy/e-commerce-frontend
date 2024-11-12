import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../actions/productActions";

const ProductList = () => {
  const dispatch = useDispatch();

  const productState = useSelector((state) => state.product);
  const { loading, products, error } = productState;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="product-list">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="product-cards">
          {products.map((product) => (
            <div key={product._id} className="product-card">
              <img
                src={product.Image || "https://via.placeholder.com/150"}
                alt={product.name}
                className="product-image"
              />
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-category">Category: {product.category}</p>
                <p className="product-price">${product.price}</p>
                <p className="product-quantity">Stock: {product.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
