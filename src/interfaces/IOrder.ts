export interface IOrder {
    id?: number,
    status: string, // active | complete | cancel
    userid?: number,
    prodid?: IOrderProduct[],
    quantity?: number
}

export enum OrderStatus {
    active = '1' ,
    complete = '2',
    cancel = '3'
}

export interface IOrderProduct {
    productId: number,
    productQnt: number
}