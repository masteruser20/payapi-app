export class PaymentMethod {
    id: number;
    name: string;
    label: string;
    types: string[];
    additionalData: object[];

    constructor(id: number, name: string, label: string, types: string[], additionalData: object[]) {
        this.id = id;
        this.name = name;
        this.label = label;
        this.types = types;
        this.additionalData = additionalData;
    }
}