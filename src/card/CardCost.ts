import { Money } from "../Money";

export class CardCost {
    constructor(
        private readonly _transportationFee: Money,
        private readonly _signUpFee: Money = Money.Zero(),
    ) {}

    getTransportationFee(): Money {
        return this._transportationFee;
    }

    getSignUpFee(): Money {
        return this._signUpFee;
    }

    getCost(): Money {
        return Money.add(this._transportationFee, this._signUpFee);
    }
}