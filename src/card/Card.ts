import { Money } from "../Money";
import { CardCost } from "./CardCost";

export abstract class Card {
    constructor(
        private readonly _cost: CardCost,
        private readonly _discountRate: number,
    ) {}

    calculateBenefit(): Money {
        return this._cost.getCost().multiply(this._discountRate);
    }
}