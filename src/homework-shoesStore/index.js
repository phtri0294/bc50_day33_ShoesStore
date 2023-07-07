import React, { Component } from "react";
import ProductList from "./productList";
import ModalCart from "./modalCart";
import ModalDetail from "./modalDetail";
import data from "./data.json";

export default class ShoesStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: data,
      productDetail: data[0],
      listCart: [],
    };
  }

  /**
   * DETAIL PRODUCT
   */
  handDetailProduct = (product) => {
    //Cập nhật state
    this.setState({
      productDetail: product,
    });
  };

  /**
   * FIND INDEX
   */
  _findIndex = (id) => this.state.listCart.findIndex((product) => product.id === id);

  /**
   * ADD CART PRODUCT
   */
  handAddCart = (product) => {
    const index = this._findIndex(product.id);
    let listCart = [...this.state.listCart];

    if (index !== -1) {
      listCart[index].purchaseQuantity += 1;
    } else {
      const productAddCart = {
        id: product.id,
        name: product.name,
        image: product.image,
        purchaseQuantity: 1,
        price: product.price,
      };
      listCart.push(productAddCart);
    }

    //Cập nhật state
    this.setState({
      listCart: listCart,
    });
  };

  /**
   * PLUS || MINUS PRODUCT
   */
  handUpdateQuantity = (id, isPlus) => {
    let listCartClone = [...this.state.listCart];
    const index = this._findIndex(id);
    if (index !== -1) {
      if (isPlus) {
        listCartClone[index].purchaseQuantity += 1;
      } else {
        if (listCartClone[index].purchaseQuantity > 1) {
          listCartClone[index].purchaseQuantity += -1;
        }
      }
    }
    //Cập nhật state
    this.setState({
      listCart: listCartClone,
    });
  };

  /**
   * TOTAL PRODUCT
   */
  totalQuantity = () => {
    return this.state.listCart.reduce((total, product) => (total += product.purchaseQuantity), 0)
  };

  /**
   * DELETE PRODUCT
   */
  handDeleteProduct = (id) => {
    let listCartClone = [...this.state.listCart];
    const index = this._findIndex(id);

    if (index !== -1) {
      listCartClone.splice(index, 1);
      //Cập nhật state
      this.setState({
        listCart: listCartClone,
      });
    }
  };

  /**
  * RENDER PRODUCT
  */
  render() {
    const { productDetail, listCart } = this.state;
    return (
      <div>
        <h1 className="title text-center mt-5">SHOES SHOP</h1>
        <div className="container mt-5 d-flex justify-content-end">
          <button
            className="btn btn-danger mb-2 py-3 px-5"
            data-toggle="modal"
            data-target="#modelId"
          >
            CART ({this.totalQuantity()})
          </button>
        </div>

        <ProductList
          listProduct={this.state.listProduct}
          getDetailProduct={this.handDetailProduct}
          getProductAddCart={this.handAddCart}
        />

        <ModalCart
          listcart={listCart}
          getProductUpdateQuantity={this.handUpdateQuantity}
          deleteProduct={this.handDeleteProduct}
        />

        <ModalDetail
          productDetail={productDetail}
        />
      </div>
    );
  }
}
