import {defineStore} from "pinia";

export const useCommodityStore = defineStore('commodityStore', {
    state: () => ({
        items: [
            {
                name: 'Кифір',
                price: '34.50'
            },
            {
                name: 'Ряженка',
                price: '48.50'
            },
            {
                name: 'Яблуна',
                price: '15.50'
            },
            {
                name: 'Хліб',
                price: '10.50'
            },
        ]
    })
})