import { ErrorRequestHandler } from "express";
import httpStatus from "http-status";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  let success = false;
  let message = "something went wrong";
  let errorMessage = "something went wrong";
  let errorDetails = "details";

  return res.status(httpStatus.FORBIDDEN).json({
    success,
    message,
    errorMessage,
    errorDetails,
  });
};

export default globalErrorHandler;
