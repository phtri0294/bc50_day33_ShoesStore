import React, { Component } from "react";

export default class Product extends Component {
  render() {
    const { product, getDetailProduct, getProductAddCart } = this.props;
    return (
      <div className="col-sm-4 my-1">
        <div className="card">
          <img className="card-img-top" src={product.image} alt={product.name} />
          <div className="card-body">
            <h4 className="card-title">{product.name}</h4>
            <h2 className="card-title">{product.price}$</h2>
            <button className="btn btn-success" data-target="#modalDetailId" onClick={() => { getDetailProduct(product) }}>Detail</button>
            <button className="btn btn-warning" data-target="#modelId" onClick={() => { getProductAddCart(product) }}>Add To Cart</button>
          </div>
        </div>
      </div>
    );
  }
}
