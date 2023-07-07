import React, { Component } from "react";
import Product from "./product";

export default class ProductList extends Component {
  renderListProduct = () => {
    const { listProduct, getDetailProduct, getProductAddCart } = this.props;
    return listProduct.map((product) => {
      return <Product
        key={product.id}
        product={product}
        getDetailProduct={getDetailProduct}
        getProductAddCart={getProductAddCart}
      />
    })
  }

  render() {
    return (
      <div className="container my-1">
        <div className="row">
          {this.renderListProduct()}
        </div>
      </div>
    );
  }
}
