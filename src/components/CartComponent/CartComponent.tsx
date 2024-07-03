import React from 'react';

interface CartComponentProps {
    cart: { [courseId: string]: number };
    totalAmount: number;
}

const CartComponent: React.FC<CartComponentProps> = ({ cart, totalAmount }) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-8">Your Cart</h1>
            <div className="w-1/2 bg-white p-8 rounded-lg shadow-lg">
                {Object.entries(cart).map(([courseId, price]) => (
                    <div key={courseId} className="flex justify-between mb-4">
                        <span>Course ID: {courseId}</span>
                        <span>${price.toFixed(2)}</span>
                    </div>
                ))}
                <div className="flex justify-between mt-8 font-bold">
                    <span>Total</span>
                    <span>${totalAmount.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
};

export default CartComponent;
