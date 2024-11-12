const initialState = {
    products: [],
    loading: false,
    error: null,
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'PRODUCTS_FETCH_REQUEST':
        return { ...state, loading: true };
      case 'PRODUCTS_FETCH_SUCCESS':
        return { ...state, loading: false, products: action.payload };
      case 'PRODUCTS_FETCH_FAILURE':
        return { ...state, loading: false, error: action.payload };
      case 'PRODUCT_CREATE_SUCCESS':
        return { ...state, products: [...state.products, action.payload] };
      default:
        return state;
    }
  };
  
  export default productReducer;
  