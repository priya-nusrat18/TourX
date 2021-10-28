import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SplitCardFrom from "./SplitCardFrom";
import './PaymentProcess.css'

const PaymentProcess = ({handleProcessPayment, setBookIn}) => {
  const stripePromise = loadStripe(
    "pk_test_51IeFQAIMvc3DUCQTfSMrfKdK2uqdofPu8iuJDZyIeF2MJvnOjJnc5fPOIVJ6U3aJU3UhTcGzMuIPb4XjyAkaLnUN00ggVqZDkm"
  );
  return (
    <Elements stripe={stripePromise}>
      <SplitCardFrom
        handlePayment={handleProcessPayment}
        setBookIn={setBookIn}
      />
    </Elements>
  );
};

export default PaymentProcess;
