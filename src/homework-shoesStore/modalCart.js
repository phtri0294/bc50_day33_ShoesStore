import React, { Component } from "react";

export default class ModalCart extends Component {
  renderListCart = () => {
    const { listcart, getProductUpdateQuantity, deleteProduct } = this.props;
    return listcart.map((product) => {
      return (
        <tr key={product.id}>
          <td>{product.name}</td>
          <td>
            <img src={product.image} width={50} alt="" />
          </td>
          <td>
            <button
              className="mr-2"
              onClick={() => { getProductUpdateQuantity(product.id, false) }}
            >-</button>
            {product.purchaseQuantity}
            <button
              className="ml-2"
              onClick={() => { getProductUpdateQuantity(product.id, true) }}
            >+</button>
          </td>
          <td>{product.price}</td>
          <td>{product.price * product.purchaseQuantity}</td>
          <td>
            <button className="btn btn-danger"
              onClick={() => { deleteProduct(product.id) }}
            >Delete</button>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          style={{ maxWidth: "1000px" }}
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Cart List</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Purchase Quantity</th>
                    <th>Price</th>
                    <th>Total Payment</th>
                  </tr>
                </thead>
                <tbody>
                  {this.renderListCart()}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-success">
                Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
