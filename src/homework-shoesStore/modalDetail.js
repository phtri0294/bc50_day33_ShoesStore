import React, { Component } from "react";

export default class ModalDetail extends Component {
  render() {
    const { productDetail } = this.props;
    console.log('renderDetailProduct', productDetail);

    return (
      <div
        // className="modal"
        id="modalDetailId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modalDetailId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          style={{ maxWidth: "1000px" }}
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h3 className="modal-title">Product Detail</h3>
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
                <tbody>
                  <tr className="text-center">
                    <img className="img-top" src={productDetail.image} width={250} alt={productDetail.id} />
                  </tr>
                  <tr>
                    <td >ID</td>
                    <td>{productDetail.id}</td>
                  </tr>
                  <tr>
                    <td>Name</td>
                    <td>{productDetail.name}</td>
                  </tr>
                  <tr>
                    <td>Quantity</td>
                    <td>{productDetail.quantity}</td>
                  </tr>
                  <tr>
                    <td>Price</td>
                    <td>{productDetail.price}$</td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td>{productDetail.description}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
