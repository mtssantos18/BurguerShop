import Product from "../Product";
import "./styles.css";

function ProductList({ products, addCart }) {
  return (
    <div className="productList">
      {products.map(({ id, name, category, price, img }) => (
        <Product
          key={id}
          id={id}
          name={name}
          category={category}
          price={price}
          img={img}
          addCart={addCart}
        />
      ))}
    </div>
  );
}

export default ProductList;
