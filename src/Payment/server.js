const express = require('express');
const stripe = require('stripe')('your-secret-key-from-stripe'); // Replace with your Stripe secret key
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/create-payment-intent', async (req, res) => {
    const { paymentMethodId, amount } = req.body;

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'usd',
            payment_method: paymentMethodId,
            confirmation_method: 'manual',
            confirm: true,
        });

        res.send({ paymentIntent });
    } catch (error) {
        res.send({ error: error.message });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
