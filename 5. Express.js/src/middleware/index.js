// Custom middleware functions

// Example middleware function
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

// Export middleware functions
module.exports = {
  logger,
};