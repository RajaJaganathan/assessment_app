export function notFound(req, res, next) {
  const err = new Error('Not Found');
  // @ts-ignore
  err.status = 404;
  next(err);
};
