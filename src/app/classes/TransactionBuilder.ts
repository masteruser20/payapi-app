import {ITransactionData} from "./interfaces/ITransactionData";
import {IUserData} from "./interfaces/IUserData";

export class TransactionBuilder {
    private _transaction: ITransactionData | any = {};

    get transaction(): ITransactionData | any {
        return this._transaction;
    }

    setProvider(provider: string) {
        this._transaction.provider = provider;
    }

    setMethod(method: string) {
        this._transaction.type = method;
    }

    setUser(userData: IUserData) {
        if(typeof userData.birthday === 'object')
        {
            userData.birthday = userData.birthday.format('YYYY-MM-DD');
        }
        this._transaction.user = userData;
    }

    setTransactionData(amount: number, currency: string) {
        this._transaction.amount = amount;
        this._transaction.currency = currency;
    }

    setAdditionalData(additionalData: object) {
        this._transaction.attributes = additionalData;
    }
}