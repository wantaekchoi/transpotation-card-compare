// models/Currency.ts
import { Enum, EnumType } from 'ts-jenum';

@Enum('code')
export class Currency extends EnumType<Currency>() {
  static readonly KRW = new Currency('KRW', 'Korean Won', '₩');
  static readonly USD = new Currency('USD', 'US Dollar', '$');
  static readonly JPY = new Currency('JPY', 'Japanese Yen', '¥');
  static readonly CNY = new Currency('CNY', 'Chinese Yuan', '¥');

  private constructor(
    readonly _code: string,
    readonly _name: string,
    readonly _symbol: string
  ) {
    super();
  }

  getCode(): string {
    return this._code;
  }

  getName(): string {
    return this._name;
  }

  getSymbol(): string {
    return this._symbol;
  }
}
