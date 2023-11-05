// stripe.js

import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51O8NIpSBiTGeTWlntUbv9ZbVaN9TXvVX6MBIdE5XEcEWpw2jnnPuhB2H2zpveSSoYaL0ExzeuqGjeDNkOMgkW55n00R5LpCbc9');

export default stripePromise;
