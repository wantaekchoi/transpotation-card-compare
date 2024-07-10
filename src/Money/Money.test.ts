import { Money } from './Money';
import { Currency } from './Currency';
import { CurrencyMismatchError, DivisionByZeroError } from './Errors';

describe('Money', () => {
  describe('add', () => {
    it('should add two Money instances with the same currency', () => {
      // Given
      const money1 = new Money(100, Currency.KRW);
      const money2 = new Money(200, Currency.KRW);

      // When
      const result = money1.add(money2);

      // Then
      expect(result.getAmount()).toBe(300);
      expect(result.getCurrency()).toBe(Currency.KRW);
    });

    it('should return the same amount if the second Money instance is null or undefined', () => {
      // Given
      const money = new Money(100, Currency.KRW);

      // When
      const resultWithNull = money.add(null);
      const resultWithUndefined = money.add(undefined);

      // Then
      expect(resultWithNull.getAmount()).toBe(100);
      expect(resultWithNull.getCurrency()).toBe(Currency.KRW);
      expect(resultWithUndefined.getAmount()).toBe(100);
      expect(resultWithUndefined.getCurrency()).toBe(Currency.KRW);
    });

    it('should throw an error if the currencies do not match', () => {
      // Given
      const money1 = new Money(100, Currency.KRW);
      const money2 = new Money(200, Currency.USD);

      // Then
      expect(() => money1.add(money2)).toThrow(CurrencyMismatchError);
    });
  });

  describe('subtract', () => {
    it('should subtract two Money instances with the same currency', () => {
      // Given
      const money1 = new Money(200, Currency.KRW);
      const money2 = new Money(100, Currency.KRW);

      // When
      const result = money1.subtract(money2);

      // Then
      expect(result.getAmount()).toBe(100);
      expect(result.getCurrency()).toBe(Currency.KRW);
    });

    it('should return the same amount if the second Money instance is null or undefined', () => {
      // Given
      const money = new Money(100, Currency.KRW);

      // When
      const resultWithNull = money.subtract(null);
      const resultWithUndefined = money.subtract(undefined);

      // Then
      expect(resultWithNull.getAmount()).toBe(100);
      expect(resultWithNull.getCurrency()).toBe(Currency.KRW);
      expect(resultWithUndefined.getAmount()).toBe(100);
      expect(resultWithUndefined.getCurrency()).toBe(Currency.KRW);
    });

    it('should throw an error if the currencies do not match', () => {
      // Given
      const money1 = new Money(200, Currency.KRW);
      const money2 = new Money(100, Currency.USD);

      // Then
      expect(() => money1.subtract(money2)).toThrow(CurrencyMismatchError);
    });
  });

  describe('multiply', () => {
    it('should multiply the amount by a factor', () => {
      // Given
      const money = new Money(100, Currency.KRW);

      // When
      const result = money.multiply(2);

      // Then
      expect(result.getAmount()).toBe(200);
      expect(result.getCurrency()).toBe(Currency.KRW);
    });
  });

  describe('divide', () => {
    it('should divide the amount by a divisor', () => {
      // Given
      const money = new Money(200, Currency.KRW);

      // When
      const result = money.divide(2);

      // Then
      expect(result.getAmount()).toBe(100);
      expect(result.getCurrency()).toBe(Currency.KRW);
    });

    it('should throw an error when dividing by zero', () => {
      // Given
      const money = new Money(200, Currency.KRW);

      // Then
      expect(() => money.divide(0)).toThrow(DivisionByZeroError);
    });
  });

  describe('toString', () => {
    it('should return the amount with the currency symbol', () => {
      // Given
      const money = new Money(100, Currency.KRW);

      // When
      const result = money.toString();

      // Then
      expect(result).toBe('₩100');
    });
  });

  describe('Zero', () => {
    it('should return a Money instance with zero amount and the specified currency', () => {
      // When
      const result = Money.Zero(Currency.USD);

      // Then
      expect(result.getAmount()).toBe(0);
      expect(result.getCurrency()).toBe(Currency.USD);
    });

    it('should return a Money instance with zero amount and KRW currency by default', () => {
      // When
      const result = Money.Zero();

      // Then
      expect(result.getAmount()).toBe(0);
      expect(result.getCurrency()).toBe(Currency.KRW);
    });
  });
});
