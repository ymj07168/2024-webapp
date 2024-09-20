import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initData = {
  cart: [],
};

const reducer = (state = initData, action) => {
  switch (action.type) {
    case "add_cart":
      return [...state.cart, action.payload];
    
    default:
      return state;
  }
};

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <div>shop</div>
      <ProductionList />
      <Cart />
    </Provider>
  );
};

const products = [
  { id: 1, name: "product1111" },
  { id: 1, name: "product1111" },
  { id: 1, name: "product1111" },
  { id: 1, name: "product1111" },
];

const ProductionList = () => {
  return (
    <>
      <div>product</div>
      {products.map((item, i) => {
        return <div key={i}>{item}</div>;
      })}
    </>
  );
};

const Cart = () => {
  return (
    <>
      <div>cart</div>
    </>
  );
};
export default App;
