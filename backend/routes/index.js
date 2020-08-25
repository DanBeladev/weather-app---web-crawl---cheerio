import searchRoute from './searchRoute';

export default app => {
  app.use('/search', searchRoute);
};
