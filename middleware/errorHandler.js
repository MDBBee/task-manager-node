const { customAPIError } = require("../errors/custom-error");
const errorHandler = (err, req, res, next) => {
  console.log(err instanceof customAPIError);

  if (err instanceof customAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  res.status(500).json({ msg: "Something went wrong!!!" });
};

module.exports = errorHandler;
