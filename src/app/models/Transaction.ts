export class Transaction {
    private id: number;
    private user: number;
    private provider: string;
    private type: string;
    private start_time: string;
    private end_time: string;
    private status: string;
    private amount: number;
    private currency: string;
    private attributes;

    constructor(id: number, user: number, provider: string, type: string, status: string, amount: number, currency: string, start_time: string, end_time: string, attributes: string) {
        this.id = id;
        this.user = user;
        this.provider = provider;
        this.type = type;
        this.status = status;
        this.amount = amount;
        this.currency = currency;
        this.start_time = start_time;
        this.end_time = end_time;
        this.attributes = attributes;
    }
}
