export class CurrencyMismatchError extends Error {
    constructor(message: string = 'Currency mismatch') {
      super(message);
      this.name = 'CurrencyMismatchError';
    }
  }
  
  export class DivisionByZeroError extends Error {
    constructor(message: string = 'Cannot divide by zero') {
      super(message);
      this.name = 'DivisionByZeroError';
    }
  }
  