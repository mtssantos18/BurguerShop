import "./App.css";
import "./reset.css";

import { useEffect, useState } from "react";

import api from "./database/api";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

function App() {
  const [products, setProducts] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState(
    JSON.parse(localStorage.getItem("@Burguer:cart")) || []
  );
  const [cartTotal, setCartTotal] = useState(0);

  function filterProducts(product) {
    let productFound = product.toLowerCase();
    const filter = products.filter(
      (elem) =>
        elem.name.toLowerCase().includes(productFound) ||
        elem.category.toLowerCase().includes(productFound)
    );

    if (product !== "") {
      setIsFiltered(true);
      setFilteredProducts(filter);
    } else {
      setIsFiltered(false);
    }
  }

  function addCart(id) {
    const product = products.find((elem) => elem.id === +id);

    const checkProduct = currentSale.some((elem) => elem.id === +id);

    if (checkProduct === false) {
      setCurrentSale([...currentSale, product]);
      toast.success("Produto adicionado");
    } else {
      toast.error("Produto já adicionado");
    }
  }

  function removerCart(id) {
    const products = currentSale.filter((elem) => elem.id !== +id);

    setCurrentSale(products);
    toast.success("Produto removido");
  }

  function removeAllCart() {
    setCurrentSale([]);
    toast.success("Carrinho excluído");
  }

  useEffect(() => {
    api.get("/products").then((res) => setProducts(res.data));
  }, []);

  useEffect(() => {
    localStorage.setItem("@Burguer:cart", JSON.stringify(currentSale));
    setCartTotal(
      currentSale.reduce((acc, currentValue) => acc + currentValue.price, 0)
    );
  }, [currentSale]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header filterProducts={filterProducts} />
      <main>
        <ProductList
          products={isFiltered ? filteredProducts : products}
          addCart={addCart}
        />

        <Cart
          currentSale={currentSale}
          cartTotal={cartTotal}
          removerCart={removerCart}
          removeAllCart={removeAllCart}
        />
      </main>
    </>
  );
}

export default App;
