module.exports = (errfunc) => (req, res, next) => {
    Promise.resolve(errfunc(req, res, next)).catch(next);
  };