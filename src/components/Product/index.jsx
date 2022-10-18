import "./styles.css";

function Product({ id, name, category, price, img, addCart }) {
  return (
    <div className="productCard">
      <figure className="image">
        <img src={img} alt={name} />
      </figure>
      <div className="description">
        <p className="name">{name}</p>
        <small className="category">{category}</small>
        <p className="price">
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <button id={id} onClick={(event) => addCart(event.target.id)}>
          Adicionar
        </button>
      </div>
    </div>
  );
}

export default Product;
