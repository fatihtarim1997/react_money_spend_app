import { useState, useEffect } from "react";
import Header from "./components/Header";
import product from "./components/product.json";
import Product from "./components/Product";
import Basket from "./components/Basket"
import "./App.css";

function App() {
  const [money, setMoney] = useState(100000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  const resetBasket = () => {
    setBasket([])
  }

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * product.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  }, [basket]);

  return (
    <div> 
      <Header total={total} money={money}></Header>
      <div className="container product">
      {product.map((product) => (
        <Product
          basket={basket}
          setBasket={setBasket}
          product={product}
          total={total}
          money={money}
        ></Product>
      ))}</div>
      <Basket product={product} total={total} basket={basket}></Basket>
      <button className="btn" onClick={resetBasket}>Sepeti Sıfırla</button>
    </div>
  );
}

export default App;
