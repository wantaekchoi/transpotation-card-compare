import { Currency } from './Currency';
import { CurrencyMismatchError, DivisionByZeroError } from './Errors';

export class Money {
  constructor(
    private readonly _amount: number,
    private readonly _currency: Currency = Currency.KRW
  ) {}

  getAmount(): number {
    return this._amount;
  }

  getCurrency(): Currency {
    return this._currency;
  }

  add(money: Money): Money {
    if (!money) {
      return new Money(this._amount, this._currency);
    }
    if (this._currency !== money.getCurrency()) {
      throw new CurrencyMismatchError();
    }
    return new Money(this._amount + money.getAmount(), this._currency);
  }

  static add(a: Money, b: Money): Money {
    if (!a) return b ? new Money(b.getAmount(), b.getCurrency()) : Money.Zero();
    if (!b) return a;
    return a.add(b);
  }

  subtract(money: Money): Money {
    if (!money) {
      return new Money(this._amount, this._currency);
    }
    return this.add(new Money(-money.getAmount(), money.getCurrency()));
  }

  static subtract(a: Money, b: Money): Money {
    if (!a) return b ? new Money(-b.getAmount(), b.getCurrency()) : Money.Zero();
    if (!b) return a;
    return a.subtract(b);
  }

  multiply(factor: number): Money {
    return new Money(this._amount * factor, this._currency);
  }

  divide(divisor: number): Money {
    if (divisor === 0) {
      throw new DivisionByZeroError();
    }
    return new Money(this._amount / divisor, this._currency);
  }

  toString(): string {
    return `${this._currency.symbol}${this._amount}`;
  }

  static Zero(currency: Currency = Currency.KRW): Money {
    return new Money(0, currency);
  }
}
