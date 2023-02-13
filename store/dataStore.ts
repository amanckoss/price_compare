import {defineStore} from "pinia";
import {get, getDatabase, limitToFirst, query, ref} from "@firebase/database";
import {ItemStructure, JSONStructure, Price} from "~/store/type";


const getPrice = (object: any): Array<Price> => {
    let array = []
    for (let key in object) {
        array.push({
            market: key,
            value: object[key] as number
        })
    }
    return array
}

export const useDataStore = defineStore('dataStore', {
    state: () => ({
        defaultItems: [] as Array<ItemStructure>
    }),
    actions: {
        async fetchData() {
            const db = getDatabase();
            get(query(ref(db, 'commodity'), limitToFirst(20))).then((snapshot) => {
                if (snapshot.exists()) {
                    const json = snapshot.val() as JSONStructure
                    for (let item in json) {
                        const price = getPrice(json[item].prices)
                        this.defaultItems.push({
                            id: item,
                            title: json[item].product.name,
                            img: json[item].product.img,
                            price: price
                        })
                    }
                    console.log(JSON.stringify(this.defaultItems))
                } else {
                    console.log('No data available')
                }
            }). catch((error) => {
                console.log(error)
            });
        }
    }
})