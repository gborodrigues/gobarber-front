import { createStore, compose, applyMiddleware } from 'redux';

export default (reducers, midlewares) => {
  const enhancer =
    process.env.NODE_ENV === 'development'
    ? compose(console.tron.createEnhancer(), applyMiddleware(...midlewares))
    : applyMiddleware(...midlewares);

  return createStore(reducers, enhancer);
};
