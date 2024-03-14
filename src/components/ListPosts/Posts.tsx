import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { IProduct } from "../../interfaces/Product";
import { ProductContext } from "../../contexts/ProductContextProvider";

const Posts = () => {
  const { products } = useContext(ProductContext);
  console.log(products);

  return (
    <div className="posts__main">
      {products.map((item: IProduct, index: number) => (
        <article key={index} className="posts__item">
          <Link to={`/products/${item.id}`}>
            <img src={item.img} alt="product image" />
          </Link>
          <h4 className="posts__heading-title">{item.title}</h4>
          <p className="posts__description">{item.desc}</p>
          <div className="posts__heading-bottom">
            <p>May 20th 2020</p>
            <Link to={`article`} className="posts__read-more">
              Read more
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Posts;
