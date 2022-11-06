import "./index.css";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
function MainPage() {
  const [products, setProducts] = React.useState([]); //배열을 return해주는 함수

  React.useEffect(function () {
    // useState가 변회됨에 따라 무한 랜더링 되는 것을 방지하기 위해 useEffect사용
    axios // 라이브러리 사용하여 서버와 통신
      .get(
        "https://6286f049-378d-49c4-ae20-7ff7ade587cf.mock.pstmn.io/products"
      )
      .then(function (result) {
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.error("에러발생");
      });
  }, []);
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="images\icons\logo.png" alt="" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src={"images/banners/banner1.png"} alt="" />
        </div>
        <h1>판매되는 상품들</h1>
        <div id="product-list">
          {/* map함수 사용하여 반복문 사용 (product, index 순회) */}
          {products.map(function (product, index) {
            //jsx문법 사용 {} 포함
            return (
              <div className="product-card">
                <Link className="product-link" to={`/products/${index}`}>
                  <img className="product-img" src={product.imageUrl} alt="" />
                  <div className="product-contents">
                    <span className="product-name">{product.name}</span>
                    <span className="product-price">{product.price}원</span>
                    <div className="product-seller">
                      <img
                        className="product-avatar"
                        src="images/icons/avatar.png"
                        alt=""
                      />
                      <span>{product.seller}</span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default MainPage;
