const STRIPE_PUBLISHABLE = process.env.NODE_ENV === 'production'
  ? 'pk_test_f6HBLYKARX4eOKqxgNzzB9Tt'
  : 'pk_test_f6HBLYKARX4eOKqxgNzzB9Tt';

export default STRIPE_PUBLISHABLE;
