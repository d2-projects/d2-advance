class BaseError extends Error {}

export class UnknownError<R> extends BaseError {
  readonly response: R;
  constructor(response: R) {
    super();
    this.response = response;
  }
}

export class MyExampleError<R> extends BaseError {
  readonly response: R;
  constructor(response: R) {
    super();
    this.response = response;
  }
}
