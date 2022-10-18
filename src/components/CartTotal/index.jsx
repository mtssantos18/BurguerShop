import "./styles.css";

function CartTotal({ cartTotal, removeAllCart }) {
  return (
    <div className="cartPrice">
      <div className="priceDescription">
        <p>Total</p>
        <p>
          {cartTotal.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
      <button onClick={removeAllCart}>Remover todos</button>
    </div>
  );
}

export default CartTotal;
