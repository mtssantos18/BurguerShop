import "./styles.css";

function CartProduct({ id, img, name, category, removerCart }) {
  return (
    <div className="cartCard">
      <div className="imgDiv">
        <img src={img} alt={name} />
      </div>
      <div className="productInfo">
        <p>{name}</p>
        <small>{category}</small>
      </div>
      <button id={id} onClick={(event) => removerCart(event.target.id)}>
        Remover
      </button>
    </div>
  );
}

export default CartProduct;
