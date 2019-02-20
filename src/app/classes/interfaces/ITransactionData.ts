import {IUserData} from "./IUserData";

export interface ITransactionData {
    provider: string;
    type: string;
    amount: number;
    currency: string;
    user: IUserData;
    attributes?: object;
}