export interface JSONStructure {
    [index: number]: {
        prices: {
            [store: string]: number
        }
        product: {
            img: string
            name: string
        }
    }
}
export interface Price {
    market: string;
    value: number
}
export interface ItemStructure {
    id: string;
    title: string;
    img: string;
    price: Array<Price>
}