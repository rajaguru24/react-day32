import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Images from "./Images";
import { ADD, DELETE, SUB } from "../Redux/CartSlice";

function Cart() {
  const cartData = useSelector((state) => state.cartStore.data);
  const dispatch = useDispatch();
  const totalPrice = cartData.reduce(
    (total, data) => total + data.price * (data.quantity || 1),
    0
  );
  const totalQuantity = cartData.reduce(
    (total, data) => total + (data.quantity || 1),
    0
  );

  return (
    <>
      <div className="container">
        {cartData.map((element, index) => {
          return (
            <div key={index} className="container m-5 card">
              <div className="row card-body">
                <div className="col-4">
                  <Images element={element} />
                </div>
                <div className="col-8">
                  <div className="row">
                    <div className="col-8">
                      <h4>{element.title}</h4>
                      <p>{element.description}</p>
                    </div>
                    <div className="col-2">
                      <button
                        className="btn "
                        onClick={() => {
                          let id = element.id;
                          let quanity = element.quantity || 1;
                          dispatch(ADD({ payload: { id, quanity } }));
                        }}
                      >
                        +
                      </button>
                      <span>{element.quantity || 1}</span>
                      <button
                        className="btn "
                        onClick={() => {
                          let id = element.id;
                          let quanity = element.quantity || 1;
                          dispatch(SUB({ payload: { id, quanity } }));
                        }}
                      >
                        -
                      </button>
                    </div>
                    <div className="col-2">
                      <h5>{element.price * (element.quantity || 1)}</h5>
                      <div className="mt-5">
                        <button
                          className="btn btn-outline-warning"
                          onClick={() => dispatch(DELETE(element.id))}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <hr />
        <div className="container m-5">
          <div className="row">
            <div className="col-8">
              <h6>Total Quanity</h6>
              <h6>Sub-Total</h6>
              <h6>Addtional Charges</h6>
              <hr />
              <h5>Total Price</h5>
            </div>
            <div className="col-4 text-center">
              <h6>{totalQuantity} Items</h6>
              <h6>₹{totalPrice} </h6>
              <h6>₹ 0</h6>
              <hr />
              <h5>₹{totalPrice} </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;