export interface IOrder {
    id?: number,
    status: string, // active | complete | cancel
    userid?: number,
    prodid?: number,
    quantity?: number
}

export enum OrderStatus {
    active = '1' ,
    complete = '2',
    cancel = '3'
}