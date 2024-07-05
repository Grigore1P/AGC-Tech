import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { motion } from 'framer-motion';

const stripePromise = loadStripe('your-publishable-key-from-stripe');

interface PaymentComponentProps {
  setHasPaid: (value: boolean) => void;
  user: any;
  addToCart: (courseId: string, amount: number) => void;
}

const generateDots = (numDots: number) => {
  const directions = ['fall', 'fall-diagonal', 'fall-left'];
  const dots = [];
  for (let i = 0; i < numDots; i++) {
    const direction = directions[Math.floor(Math.random() * directions.length)];
    const sizeClass = `w-${Math.floor(Math.random() * 5) + 2} h-${Math.floor(Math.random() * 5) + 2}`;
    const leftClass = `left-${Math.floor(Math.random() * 100)}`;
    const topClass = `top-${Math.floor(Math.random() * -20)}`;
    const delayClass = `delay-${Math.floor(Math.random() * 3)}`;
    dots.push(
        <div key={i} className={`absolute bg-white rounded-full ${direction} ${sizeClass} ${leftClass} ${topClass} ${delayClass} glow`} />
    );
  }
  return dots;
};

const CheckoutForm: React.FC<PaymentComponentProps> = ({ setHasPaid, user, addToCart }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const courseId = 'htmlcss';
  const courseAmount = 0.01;
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const [name, setName] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "expiry" && value.length === 2 && !value.includes("/")) {
      event.target.value = `${value}/`;
    }
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setName(value.replace(/[^a-zA-Z -]/g, ""));
  };

  const handlePayment = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement!,
    });

    if (error) {
      setError(error.message || 'Payment failed');
      setProcessing(false);
      return;
    }

    const response = await fetch('http://localhost:3001/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ paymentMethodId: paymentMethod.id, amount: courseAmount * 100 }),
    });

    const paymentResult = await response.json();

    if (paymentResult.error) {
      setError(paymentResult.error);
      setProcessing(false);
      return;
    }

    if (paymentResult.paymentIntent.status === 'succeeded') {
      setHasPaid(true);
      if (user) {
        localStorage.setItem(`hasPaid_${user.uid}`, 'true');
        addToCart(courseId, courseAmount);
      }
      navigate('/hcpage');
    } else {
      setError('Payment failed');
    }

    setProcessing(false);
  };

  return (
      <div className="relative flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-r from-[#F3D7CA] to-[#57033F] bg-cover bg-center" style={{ backgroundImage: 'url(/imaginute/union.png)' }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {generateDots(167)}
        </div>
        <h1 className="text-4xl font-bold mb-8 text-white drop-shadow-lg">WEB PAYMENT PAGE</h1>
        <div className="relative w-full max-w-4xl p-10 bg-white bg-opacity-90 rounded-lg shadow-2xl">
          <form onSubmit={handlePayment} className="relative w-full max-w-4xl p-10 bg-transparent rounded-lg transition-transform transform hover:scale-105">
            <div className="relative w-full h-[30rem] overflow-hidden rounded-lg shadow-2xl">
              <div className="absolute inset-0 border-4 border-white rounded-xl animate-pulse"></div>
              <div className="relative flex flex-col items-center bg-gradient-to-r from-[#00052D] to-[#57033F] text-[#FFD0D0] rounded-xl p-8 mb-6 shadow-2xl w-full h-full">
                <div className="absolute inset-0 w-full h-full opacity-30 bg-gradient-to-r from-transparent via-white to-transparent bg-repeating-linear-45"></div>
                <div className="flex justify-between items-center w-full mb-8 relative z-10">
                  <div className="text-4xl font-extrabold tracking-wide text-[#FFD0D0] drop-shadow-lg">
                    AGC Card
                  </div>
                  <img src='/imaginute/creditc.png' alt="Chip" className="w-16 h-12 rounded-lg shadow-lg" />
                </div>
                <div className="w-full mb-6 relative z-10">
                  <label className="block text-sm mb-2 text-[#FFD0D0] drop-shadow-md">
                    Card Number
                  </label>
                  <CardElement className="w-full p-3 bg-transparent border border-gray-300 rounded-lg focus:outline-none shadow-inner" />
                </div>
                <div className="w-full mb-6 relative z-10">
                  <label className="block text-sm mb-2 text-[#FFD0D0] drop-shadow-md">
                    Name on Card
                  </label>
                  <input
                      type="text"
                      className="w-full p-3 bg-transparent border border-gray-300 rounded-lg focus:outline-none shadow-inner"
                      placeholder="First and Last Name"
                      value={name}
                      onChange={handleNameChange}
                  />
                </div>
                <div className="flex w-full mb-6 relative z-10">
                  <div className="w-1/2 pr-4">
                    <label className="block text-sm mb-2 text-[#FFD0D0] drop-shadow-md">
                      Expiry Date (MM/YY)
                    </label>
                    <input
                        type="text"
                        className="w-full p-3 bg-transparent border border-gray-300 rounded-lg focus:outline-none shadow-inner"
                        placeholder="MM/YY"
                        maxLength={5}
                        name="expiry"
                        onChange={handleInputChange}
                        pattern="\d{2}/\d{2}"
                        inputMode="numeric"
                    />
                  </div>
                  <div className="w-1/2 pl-4">
                    <label className="block text-sm mb-2 text-[#FFD0D0] drop-shadow-md">
                      CVC
                    </label>
                    <input
                        type="text"
                        className="w-full p-3 bg-transparent border border-gray-300 rounded-lg focus:outline-none shadow-inner"
                        placeholder="CVC"
                        maxLength={3}
                        pattern="\d*"
                        inputMode="numeric"
                    />
                  </div>
                </div>
              </div>
            </div>
            {error && <p className="mt-4 text-red-500 text-sm text-center">{error}</p>}
            <button
                type="submit"
                disabled={!stripe || processing}
                className="w-full mt-6 bg-blue-500 text-white font-bold rounded-lg h-12 flex items-center justify-center shadow-xl transform transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
            >
              {processing ? (
                  <motion.div className="w-6 h-6 border-4 border-t-4 border-t-transparent border-white rounded-full animate-spin" />
              ) : (
                  `Pay $${courseAmount}`
              )}
            </button>
          </form>
        </div>
        <footer className="mt-8 text-white text-sm text-center drop-shadow-lg">
          AGCTECH
        </footer>
      </div>
  );
};

const PaymentComponent: React.FC<PaymentComponentProps> = (props) => (
    <Elements stripe={stripePromise}>
      <CheckoutForm {...props} />
    </Elements>
);

export default PaymentComponent;
