import CartProduct from "../CartProduct";
import CartTotal from "../CartTotal";
import "./styles.css";

function Cart({ currentSale, cartTotal, removerCart, removeAllCart }) {
  return currentSale.length !== 0 ? (
    <div className="cart">
      <div className="title">Carrinho de compras</div>
      <div className="cartItems">
        <div className="cartProducts">
          {currentSale.map(({ id, img, name, category }) => (
            <CartProduct
              key={id}
              id={id}
              img={img}
              name={name}
              category={category}
              removerCart={removerCart}
            />
          ))}
        </div>
        <CartTotal cartTotal={cartTotal} removeAllCart={removeAllCart} />
      </div>
    </div>
  ) : (
    <div className="cart">
      <div className="title">Carrinho de compras</div>
      <div className="emptyCart">
        <h2>Sua sacola está vazia</h2>
        <p>Adicione itens</p>
      </div>
    </div>
  );
}

export default Cart;
