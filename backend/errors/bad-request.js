import CustomAPIError from "./custom-api";

class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = 400;
  }
}

export default BadRequestError;
