import React from "react";
import { useSelector } from "react-redux";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { getTotalPrice } from "../redux/cartSlice";
import "./CheckoutForm.css";

export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  // Получаем общую сумму из состояния Redux
  const totalPrice = useSelector(getTotalPrice);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    // Пока что просто логируем - бекенд не подключен
    console.log("Payment simulation — backend is not connected yet.");
  };

  return (
    <div className="checkout-wrapper">
      <h2 className="title">Order Payment</h2>

      <div className="total-amount">
        Total amount: <strong>${totalPrice.toFixed(2)}</strong>
      </div>

      <form onSubmit={handleSubmit} className="checkout-form">
        <label className="card-label" htmlFor="card-element">
          Enter card details
        </label>
        <div className="card-element-wrapper">
          <CardElement
            id="card-element"
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#32325d",
                  fontFamily:
                    '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                  "::placeholder": {
                    color: "#a0aec0",
                  },
                },
                invalid: {
                  color: "#fa755a",
                },
              },
            }}
          />
        </div>

        <button type="submit" className="pay-btn" disabled={!stripe}>
          Pay
        </button>
      </form>
    </div>
  );
};
