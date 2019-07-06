import React, { Component } from 'react';
import './Order.css';

class Order extends Component {

    render() {

        return (
            <div>
                <div className="mt-auto">
                    <div className="orderNow">
                        <h1>Order Now</h1>
                    </div>
                    <div>
                        <form className="orderForm">

                            <div className="container">
                                <h3>Customer Info</h3>
                                <div className="row inputData">
                                    {/* <hr /> */}
                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-5">
                                        <div className="ui-placeholder ui-leftTop ui-zoom">
                                            <input type="text" className="ui-underline" placeholder="Invoice" />
                                            <span>Invoice</span>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-5">
                                        <div className="ui-placeholder ui-leftTop ui-zoom">
                                            <input type="text" className="ui-underline" placeholder="ID" maxLength="11" />
                                            <span>ID</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-12 col-lg-12 mb-5">
                                        <div className="ui-placeholder ui-leftTop ui-zoom">
                                            <input type="text" className="ui-underline" placeholder="Shop Name and Address" />
                                            <span>Shop Name and Address</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-5">
                                        <div className="ui-placeholder ui-leftTop ui-zoom">
                                            <input type="text" className="ui-underline" placeholder="Route" />
                                            <span>Route</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-5">
                                        <div className="ui-placeholder ui-leftTop ui-zoom">
                                            <input type="text" className="ui-underline" placeholder="Mobile No." maxLength="11" />
                                            <span>Mobile No.</span>
                                        </div>
                                    </div>


                                </div>
                                <h3>Items Info</h3>
                                <div className="row inputData">
                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-5">
                                        <div className="ui-placeholder ui-leftTop ui-zoom">
                                            <input type="text" className="ui-underline" placeholder="Sr. #" />
                                            <span>Sr. #</span>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-5">
                                        <div className="ui-placeholder ui-leftTop ui-zoom">
                                            <input type="text" className="ui-underline" placeholder="Item Name" maxLength="11" />
                                            <span>Item Name</span>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-5">
                                        <div className="ui-placeholder ui-leftTop ui-zoom">
                                            <input type="text" className="ui-underline" placeholder="Category" />
                                            <span>Category</span>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-5">
                                        <div className="ui-placeholder ui-leftTop ui-zoom">
                                            <input type="text" className="ui-underline" placeholder="Company Name" />
                                            <span>Company Name</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-5">
                                        <div className="ui-placeholder ui-leftTop ui-zoom">
                                            <input type="text" className="ui-underline" placeholder="Quantity" />
                                            <span>Quantity</span>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-6 col-lg-6 mb-5">
                                        <div className="ui-placeholder ui-leftTop ui-zoom">
                                            <input type="text" className="ui-underline" placeholder="Unit Price" maxLength="11" />
                                            <span>Unit Price</span>
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className="container buttons">
                                <div className="row buttonContainer">
                                    <button className="col-sm-12 col-md-6 col-lg-3 add">Add Item</button>
                                    <button className="col-sm-12 col-md-6 col-lg-3 clear">Clear Item</button>
                                    <button className="col-sm-12 col-md-6 col-lg-3 cancel">Cancel Order</button>
                                    <button className="col-sm-12 col-md-6 col-lg-3 invoice">Generate Invoice</button>

                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12 pl-0 pr-0">
                                <h3 className="mt-5">Product List</h3>
                                <div className="table table-hover table-responsive productList">
                                    <table className="read-table">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="tableHeaders">Sr. #</th>
                                                <th scope="col" className="tableHeaders">Company Name</th>
                                                <th scope="col" className="tableHeaders">Category</th>
                                                <th scope="col" className="tableHeaders">Item Name</th>
                                                <th scope="col" className="tableHeaders">Quantity</th>
                                                <th scope="col" className="tableHeaders">Unit Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="records">
                                                <td>1</td>
                                                <td>Company</td>
                                                <td>Category</td>
                                                <td>Item</td>
                                                <td>Quantity</td>
                                                <td>Unit Price</td>
                                            </tr>
                                            <tr className="records">
                                                <td>1</td>
                                                <td>Company</td>
                                                <td>Category</td>
                                                <td>Item</td>
                                                <td>Quantity</td>
                                                <td>Unit Price</td>
                                            </tr>
                                            <tr className="records">
                                                <td>1</td>
                                                <td>Company</td>
                                                <td>Category</td>
                                                <td>Item</td>
                                                <td>Quantity</td>
                                                <td>Unit Price</td>
                                            </tr>
                                            <tr className="records">
                                                <td>1</td>
                                                <td>Company</td>
                                                <td>Category</td>
                                                <td>Item</td>
                                                <td>Quantity</td>
                                                <td>Unit Price</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr className="records">
                                                <td colSpan="3">Total</td>
                                                <td colSpan="3">1570/- Rs.</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Order;