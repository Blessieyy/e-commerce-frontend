import axios from 'axios';

export const fetchProducts = () => async (dispatch) => {
    dispatch({ type: 'PRODUCTS_FETCH_REQUEST' });
    try {
      const { data } = await axios.get('http://localhost:5000/api/products');
      dispatch({ type: 'PRODUCTS_FETCH_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'PRODUCTS_FETCH_FAILURE', payload: error.message });
    }
  };

export const createProduct = (productData) => async (dispatch) => {
  dispatch({ type: 'PRODUCT_CREATE_REQUEST' });
  try {
    const { data } = await axios.post('http://localhost:5000/api/products', productData);
    dispatch({ type: 'PRODUCT_CREATE_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'PRODUCT_CREATE_FAILURE', payload: error.message });
  }
};
